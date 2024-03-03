import { ButtonHTMLAttributes, FC } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'primary' | 'outline';
}

export const Button: FC<ButtonProps> = ({ children, variant, ...rest }) => {
  return (
    <button
      className={`${variant === 'primary' ? 'bg-black/95 text-white hover:bg-black/85' : 'border border-black/95 bg-white text-black/95 hover:brightness-95'} w-full rounded-full px-12 py-3 text-sm capitalize transition-all duration-150`}
      {...rest}
    >
      {children}
    </button>
  );
};
