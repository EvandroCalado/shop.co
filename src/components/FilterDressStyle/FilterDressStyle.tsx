import { FC } from 'react';
import { Heading, InputRadio } from '..';

export interface FilterDressStyleProps {
  setActiveDressStyle: (clothe: string) => void;
}

export const FilterDressStyle: FC<FilterDressStyleProps> = ({
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
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="formal"
        groupName="dressStyle"
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="party"
        groupName="dressStyle"
        onChangeHandle={setActiveDressStyle}
      />
      <InputRadio
        name="gym"
        groupName="dressStyle"
        onChangeHandle={setActiveDressStyle}
      />
    </div>
  );
};
