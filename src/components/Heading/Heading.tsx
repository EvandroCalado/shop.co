import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  uppercase?: boolean;
  className?: string;
}

export const Heading: FC<HeadingProps> = ({
  title,
  as = 'h1',
  uppercase,
  className,
}) => {
  const Element = as;

  return (
    <Element
      className={twMerge(
        ' font-black text-black/95',
        uppercase && 'uppercase',
        as === 'h1' && 'text-3xl sm:text-4xl md:text-6xl',
        as === 'h2' && 'text-5xl',
        as === 'h3' && 'text-4xl',
        as === 'h4' && 'text-3xl',
        as === 'h5' && 'text-2xl',
        as === 'h6' && 'text-xl',
        className,
      )}
    >
      {title}
    </Element>
  );
};
