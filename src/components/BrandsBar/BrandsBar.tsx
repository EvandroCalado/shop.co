import Image from 'next/image';

export const BrandsBar = () => {
  return (
    <section className="flex h-32 w-full flex-wrap items-center justify-around gap-2 bg-black/95">
      <Image src="/versace.png" alt="versace" width={166} height={33} />
      <Image src="/zara.png" alt="zara" width={75} height={33} />
      <Image src="/gucci.png" alt="gucci" width={166} height={33} />
      <Image src="/prada.png" alt="prada" width={166} height={33} />
      <Image src="/calvin.png" alt="calvin" width={166} height={33} />
    </section>
  );
};
