import Image from 'next/image';
import { Button } from '..';

const stats = [
  {
    id: 1,
    name: 'international brands',
    number: '200+',
  },
  {
    id: 2,
    name: 'high-quality products',
    number: '2,000+',
  },
  {
    id: 3,
    name: 'happy customers',
    number: '30,000+',
  },
];

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between bg-[#f0f0f0] px-6 md:flex-row md:px-16 lg:px-24">
      <div className="space-y-10 py-6">
        <h1 className="text-4xl font-black uppercase text-black/95 md:text-6xl">
          find clothes
          <br /> that matches
          <br /> your style
        </h1>

        <p className="max-w-xl text-sm text-zinc-500">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <Button className="w-full md:w-auto">shop now</Button>

        <div className="flex flex-wrap items-center gap-4 border-black md:gap-8 [&>div:not(:last-child)]:border-r">
          {stats.map((stat) => (
            <div key={stat.id} className="pr-4 md:pr-8">
              <h4 className="text-2xl font-bold md:text-4xl">{stat.number}</h4>
              <span className="text-[12px] text-zinc-500">{stat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative min-h-[480px] w-full md:min-h-[960px]">
        <Image
          src="/hero.png"
          alt="logo"
          fill
          className="object-contain md:object-cover 2xl:object-contain"
        />
      </div>
    </section>
  );
};
