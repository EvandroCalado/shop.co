import { FC } from 'react';

export interface CheckboxProps {
  name: string;
  groupName: string;
}

export const Checkbox: FC<CheckboxProps> = ({ name, groupName }) => {
  return (
    <div className="my-4 flex items-center justify-between text-zinc-500">
      <label htmlFor={name} className="w-full cursor-pointer capitalize">
        {name}
      </label>
      <input
        type="radio"
        id={name}
        name={groupName}
        className="cursor-pointer accent-black/95"
      />
    </div>
  );
};
