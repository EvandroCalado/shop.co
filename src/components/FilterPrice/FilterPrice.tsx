import { Heading } from '..';

export const FilterPrice = () => {
  return (
    <>
      <Heading title="price" as="h6" className="font-semibold capitalize" />

      <input
        type="range"
        min={0}
        max={1000}
        step={1}
        className="mt-4 w-full accent-black/95"
      />

      <div className="mb-4 flex items-center justify-between text-[12px] font-semibold">
        <span>$0</span>
        <span>$1000</span>
      </div>
    </>
  );
};
