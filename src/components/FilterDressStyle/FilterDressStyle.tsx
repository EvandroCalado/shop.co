import { FC } from 'react';
import { Heading, InputRadio } from '..';

export interface FilterDressStyleProps {
  activeDressStyle: string;
  setActiveDressStyle: (clothe: string) => void;
}

export const FilterDressStyle: FC<FilterDressStyleProps> = ({
  activeDressStyle,
  setActiveDressStyle,
}) => {
  return (
    <div>
      <Heading
        title="dress style"
        as="h6"
        className="font-semibold capitalize"
      />
      <InputRadio
        name="casual"
        groupName="dressStyle"
        activeValue={activeDressStyle}
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="formal"
        groupName="dressStyle"
        activeValue={activeDressStyle}
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="party"
        groupName="dressStyle"
        activeValue={activeDressStyle}
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="gym"
        groupName="dressStyle"
        activeValue={activeDressStyle}
        onChangeHandle={setActiveDressStyle}
      />
    </div>
  );
};
