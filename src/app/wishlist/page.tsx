'use client';

import {
  Button,
  Heading,
  Layout,
  Pagination,
  ProductPrice,
  RatingItem,
} from '@/components';
import { WishlistType } from '@/types/wishlistType';
import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';
import { PackageOpen } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Wishlist = () => {
  const { data: session, status } = useSession();
  const [wishlists, setWishlists] = useState<WishlistType>();
  const [currentPage, setCurrentPage] = useState(1);

  const router = useRouter();

  const { page, pageCount, total } = wishlists
    ? wishlists.meta.pagination
    : { page: 0, pageCount: 0, total: 0 };

  const getWishlist = useCallback(
    async (pageNumber = currentPage) => {
      const populate = '?populate=deep,3';
      const filters = `&filters[user][id][$eq]=${session?.user?.id}`;
      const pagination = `&pagination[page]=${pageNumber}&pagination[pageSize]=6`;

      try {
        const { data } = await customFetch.get(
          `/wishlists${populate}${filters}${pagination}`,
        );

        if (!data) {
          throw new Error('No wishlist found');
        }

        if (data) {
          setWishlists(data);
        }

        return data;
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.response?.data?.error?.message);
        }
      }
    },
    [currentPage, session?.user?.id],
  );

  useEffect(() => {
    if (status === 'authenticated') {
      getWishlist();
    }
  }, [getWishlist, session, session?.user.jwt, status]);

  const handleRemoveFromWishlist = async (id: number) => {
    try {
      const res = await customFetch.delete(`/wishlists/${id}`);

      if (res.status === 200) {
        toast.success('Product removed from wishlist');
        getWishlist();
        return;
      }

      toast.error('Error removing product from wishlist');
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data?.error?.message);
      }
    }
  };

  if (status === 'unauthenticated') {
    router.push('/login?redirect=/wishlist');
  }

  return (
    <Layout>
      <section className="px-6 py-6 md:px-16 lg:px-24">
        <Heading title="your wishlist" className="text-center capitalize" />

        {wishlists?.data?.length === 0 && (
          <div className="my-40 flex items-center justify-center gap-4">
            <PackageOpen size={50} />
            <Heading
              title="your wishlist is empty"
              as="h4"
              className="capitalize"
            />
          </div>
        )}

        {status === 'loading' ? (
          <Heading
            title="loading..."
            as="h4"
            className="my-40 animate-pulse text-center capitalize"
          />
        ) : (
          <>
            {total > 0 && (
              <Heading title={`Total (${total})`} as="h6" className="mt-8" />
            )}
            <div className="my-16 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {wishlists?.data?.map((wishlist) => (
                <div key={wishlist.id} className="space-y-4">
                  <div className="relative h-[300px] w-full rounded-lg bg-[#f0f0f0]">
                    <Image
                      src={
                        wishlist.attributes.products.data[0].attributes.cover
                          .data.attributes.formats.small.url
                      }
                      alt={wishlist.attributes.products.data[0].attributes.name}
                      fill
                      priority
                      sizes="(100vw - 2rem) 400px, 360px"
                      className="object-contain"
                    />
                  </div>

                  <Heading
                    title={wishlist.attributes.products.data[0].attributes.name}
                    as="h5"
                    className="capitalize"
                  />

                  <RatingItem
                    ratings={
                      wishlist.attributes.products.data[0].attributes.ratings
                    }
                  />

                  {
                    <ProductPrice
                      price={
                        wishlist.attributes.products.data[0].attributes.price
                      }
                    />
                  }

                  <div className="flex items-center justify-between">
                    <Button
                      className="w-32 px-0"
                      onClick={() =>
                        router.push(
                          `/product/${wishlist.attributes.products.data[0].id}`,
                        )
                      }
                    >
                      details
                    </Button>
                    <Button
                      variant="outline"
                      className="w-32 px-0"
                      onClick={() => handleRemoveFromWishlist(wishlist.id)}
                    >
                      remove
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Pagination
              page={page}
              pageCount={pageCount}
              allProductsRequest={getWishlist}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </section>
    </Layout>
  );
};

export default Wishlist;
