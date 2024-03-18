import { FC } from 'react';

export interface ProductDetailsProps {
  details: string;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ details }) => {
  return <div dangerouslySetInnerHTML={{ __html: details }}></div>;
};
