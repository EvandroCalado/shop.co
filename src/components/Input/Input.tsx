import React, { FC, InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'contrast';
  icon?: React.ReactNode;
  register?: UseFormRegisterReturn;
}

export const Input: FC<InputProps> = ({
  variant = 'default',
  icon,
  register,
  ...rest
}) => {
  return (
    <div
      className={`relative [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-[0.55rem] [&>svg]:z-10 [&>svg]:text-zinc-400`}
    >
      <input
        className={`${variant === 'default' ? 'bg-white' : 'bg-[#f0f0f0]'} w-full rounded-full px-12 py-[11px] text-sm outline-none ring-black/95 duration-150 focus:ring-1 [&+svg]:duration-150 [&+svg]:focus:text-black/95`}
        {...rest}
        {...register}
      />
      {icon && icon}
    </div>
  );
};
