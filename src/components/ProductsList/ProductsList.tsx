import { ProductsType } from '@/types';
import { FC } from 'react';
import { Heading, ProductCard } from '..';

export interface ProductsListProps {
  allProducts: ProductsType | undefined;
}

export const ProductsList: FC<ProductsListProps> = ({ allProducts }) => {
  return (
    <div className="mt-16 flex-1 md:mt-0">
      <div className="flex items-center justify-end">
        <span className="p-2 text-xl font-semibold">
          Total({allProducts?.meta.pagination.total})
        </span>
      </div>
      {allProducts?.data.length === 0 ? (
        <div className="flex h-[calc(100vh-300px)] items-center justify-center">
          <Heading title="No products found!" as="h2" />
        </div>
      ) : (
        <div className="grid grid-cols-1 justify-end gap-16 lg:grid-cols-2 xl:grid-cols-3">
          {allProducts?.data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
