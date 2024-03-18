import { ProductsByDressStyleType } from '@/types/productsByDressStyle';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Heading } from '..';

export interface BrowseByProps {
  productsByDressStyle: ProductsByDressStyleType;
}

export const BrowseBy: FC<BrowseByProps> = ({ productsByDressStyle }) => {
  const casual = productsByDressStyle.data[0].attributes;
  const formal = productsByDressStyle.data[1].attributes;
  const party = productsByDressStyle.data[2].attributes;
  const gym = productsByDressStyle.data[3].attributes;

  return (
    <section className="px-6 py-6 md:px-16 lg:px-24">
      <div className="space-y-4 rounded-3xl bg-[#f0f0f0] p-4 md:p-16">
        <Heading
          title="browse by dress style"
          uppercase
          className="mb-12 text-center"
        />

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href={`/productsByDressStyle/${casual.slug}`}
            className="flex h-[180px] w-full items-start justify-between overflow-hidden rounded-xl bg-white md:h-[320px] md:flex-[2]"
          >
            <Heading title={casual.name} as="h5" className="m-8 capitalize" />
            <div className="relative h-full w-1/2">
              <Image
                src={casual.image.data.attributes.url}
                alt={casual.name}
                sizes="(100vw - 2rem) 180px, 280px"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          <Link
            href={`/productsByDressStyle/${formal.slug}`}
            className="flex h-[180px] w-full items-start justify-between overflow-hidden rounded-xl bg-white md:h-[320px] md:flex-[3]"
          >
            <Heading title={formal.name} as="h5" className="m-8 capitalize" />
            <div className="relative h-full w-1/2">
              <Image
                src={formal.image.data.attributes.url}
                alt={formal.name}
                sizes="(100vw - 2rem) 180px, 280px"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href={`/productsByDressStyle/${gym.slug}`}
            className="flex h-[180px] w-full items-start justify-between overflow-hidden rounded-xl bg-white md:h-[320px] md:flex-[3]"
          >
            <Heading title={gym.name} as="h5" className="m-8 capitalize" />
            <div className="relative h-full w-1/2">
              <Image
                src={gym.image.data.attributes.url}
                alt={gym.name}
                sizes="(100vw - 2rem) 180px, 280px"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>

          <Link
            href={`/productsByDressStyle/${party.slug}`}
            className="flex h-[180px] w-full items-start justify-between overflow-hidden rounded-xl bg-white md:h-[320px] md:flex-[2]"
          >
            <Heading title={party.name} as="h5" className="m-8 capitalize" />
            <div className="relative h-full w-1/2">
              <Image
                src={party.image.data.attributes.url}
                alt={party.name}
                sizes="(100vw - 2rem) 180px, 280px"
                fill
                priority
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
