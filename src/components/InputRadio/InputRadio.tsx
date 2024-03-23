'use client';

import { FC } from 'react';

export interface InputRadioProps {
  name: string;
  groupName: string;
  activeValue: string;
  onChangeHandle: (clothe: string) => void;
}

export const InputRadio: FC<InputRadioProps> = ({
  name,
  groupName,
  activeValue,
  onChangeHandle,
}) => {
  return (
    <div className="my-2 flex items-center justify-between text-zinc-500">
      <label htmlFor={name} className="w-full cursor-pointer capitalize">
        {name}
      </label>
      <input
        type="radio"
        id={name}
        name={groupName}
        value={name}
        checked={activeValue === name}
        onChange={(e) => onChangeHandle(e.target.value)}
        className="cursor-pointer accent-black/95"
      />
    </div>
  );
};
