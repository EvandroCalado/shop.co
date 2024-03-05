import React, { FC, InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'contrast';
  icon?: React.ReactNode;
}

export const Input: FC<InputProps> = ({
  variant = 'default',
  icon,
  ...rest
}) => {
  return (
    <div
      className={`${variant === 'default' ? 'bg-white' : 'bg-[#f0f0f0]'} flex w-full items-center gap-2 rounded-full px-4 py-[11px] [&>svg]:text-zinc-500`}
    >
      {icon && icon}
      <input
        className="w-full bg-transparent px-2 text-sm outline-none"
        {...rest}
      />
    </div>
  );
};
