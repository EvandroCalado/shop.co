import { SizesType } from '@/types/sizesType';
import { FC } from 'react';
import { Heading, Sizes } from '..';

export interface FilterSizesProps {
  allSizes: SizesType | undefined;
  activeSize: string;
  setActiveSize: (size: string) => void;
}

export const FilterSizes: FC<FilterSizesProps> = ({
  allSizes,
  activeSize,
  setActiveSize,
}) => {
  return (
    <div>
      <Heading title="Sizes" as="h6" className="my-4 font-semibold" />
      <Sizes
        sizes={allSizes}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />
    </div>
  );
};
