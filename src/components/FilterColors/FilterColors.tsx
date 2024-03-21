import { ColorsType } from '@/types/colorsType';
import { FC } from 'react';
import { Colors, Heading } from '..';

export interface FilterColorsProps {
  activeColor: string;
  setActiveColor: (color: string) => void;
  allColors: ColorsType | undefined;
}

export const FilterColors: FC<FilterColorsProps> = ({
  activeColor,
  setActiveColor,
  allColors,
}) => {
  return (
    <div>
      <Heading title="Colors" as="h6" className="my-4 font-semibold" />
      <Colors
        colors={allColors}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
    </div>
  );
};
