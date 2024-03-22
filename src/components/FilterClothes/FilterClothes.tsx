import { FC } from 'react';
import { InputRadio } from '..';

export interface FilterClothesProps {
  setActiveClothe: (clothe: string) => void;
}

export const FilterClothes: FC<FilterClothesProps> = ({ setActiveClothe }) => {
  return (
    <div>
      <InputRadio
        name="t-shirt"
        groupName="clothes"
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="shorts"
        groupName="clothes"
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="shirts"
        groupName="clothes"
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="hoodies"
        groupName="clothes"
        onChangeHandle={setActiveClothe}
      />
      <InputRadio
        name="jeans"
        groupName="clothes"
        onChangeHandle={setActiveClothe}
      />
    </div>
  );
};
