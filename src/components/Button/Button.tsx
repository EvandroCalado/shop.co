import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `${variant === 'primary' ? 'bg-black/95 text-white hover:bg-black/85' : 'border border-black/95 bg-white text-black/95 hover:bg-[#F0f0f0]'} rounded-full px-14 py-3 text-sm capitalize transition-all duration-150`,
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
