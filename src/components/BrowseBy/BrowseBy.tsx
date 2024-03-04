import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '..';

export const BrowseBy = () => {
  return (
    <section className="px-6 py-6 md:px-16 lg:px-24">
      <div className="space-y-4 rounded-3xl bg-[#f0f0f0] p-16">
        <Heading
          title="browse by dress style"
          uppercase
          className="mb-12 text-center"
        />

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="relative h-[320px] flex-[2] overflow-hidden rounded-xl bg-white"
          >
            <Heading title="casual" as="h5" className="m-8 capitalize" />
            <Image
              src="/temp/browse.png"
              alt="browse"
              fill
              className="object-cover"
            />
          </Link>

          <Link
            href="#"
            className="relative h-[320px] flex-[3] overflow-hidden rounded-xl bg-white"
          >
            <Heading title="formal" as="h5" className="m-8 capitalize" />
            <Image
              src="/temp/browse.png"
              alt="browse"
              fill
              className="object-cover"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="relative h-[320px] flex-[3] overflow-hidden rounded-xl bg-white"
          >
            <Heading title="casual" as="h5" className="m-8 capitalize" />
            <Image
              src="/temp/browse.png"
              alt="browse"
              fill
              className="object-cover"
            />
          </Link>

          <Link
            href="#"
            className="relative h-[320px] flex-[2] overflow-hidden rounded-xl bg-white"
          >
            <Heading title="formal" as="h5" className="m-8 capitalize" />
            <Image
              src="/temp/browse.png"
              alt="browse"
              fill
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
