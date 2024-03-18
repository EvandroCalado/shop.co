import Image from 'next/image';

export const BrandsBar = () => {
  return (
    <section className="flex w-full flex-wrap items-center justify-around gap-4 bg-black/95 p-4 md:h-32">
      <div className="relative h-[33px] w-[166px]">
        <Image src="/versace.png" alt="versace" sizes="166px" fill priority />
      </div>
      <div className="relative h-[33px] w-[75px]">
        <Image src="/zara.png" alt="zara" sizes="75px" fill priority />
      </div>
      <div className="relative h-[33px] w-[166px]">
        <Image src="/gucci.png" alt="gucci" sizes="166px" fill priority />
      </div>
      <div className="relative h-[33px] w-[166px]">
        <Image src="/prada.png" alt="prada" sizes="166px" fill priority />
      </div>
      <div className="relative h-[33px] w-[166px]">
        <Image src="/calvin.png" alt="calvin" sizes="166px" fill priority />
      </div>
    </section>
  );
};
