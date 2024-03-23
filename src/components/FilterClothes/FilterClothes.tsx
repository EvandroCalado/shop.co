import { FC } from 'react';
import { InputRadio } from '..';

export interface FilterClothesProps {
  activeClothe: string;
  setActiveClothe: (clothe: string) => void;
}

export const FilterClothes: FC<FilterClothesProps> = ({
  activeClothe,
  setActiveClothe,
}) => {
  return (
    <div>
      <InputRadio
        name="t-shirts"
        groupName="clothes"
        activeValue={activeClothe}
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="shorts"
        groupName="clothes"
        activeValue={activeClothe}
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="shirts"
        groupName="clothes"
        activeValue={activeClothe}
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="hoodies"
        groupName="clothes"
        activeValue={activeClothe}
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="jeans"
        groupName="clothes"
        activeValue={activeClothe}
        onChangeHandle={setActiveClothe}
      />
    </div>
  );
};
