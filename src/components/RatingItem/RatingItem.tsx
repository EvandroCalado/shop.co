import { ProductType } from '@/types/productsType';
import { Star, StarHalf } from 'lucide-react';
import { FC } from 'react';

export interface RatingItemProps {
  ratings: ProductType['attributes']['ratings'];
}

export const RatingItem: FC<RatingItemProps> = ({ ratings }) => {
  if (!ratings || ratings.data.length === 0) return null;

  const allRatings = ratings.data.map((rating) => {
    if (rating.attributes.rate === 'one') return 1;
    if (rating.attributes.rate === 'two') return 2;
    if (rating.attributes.rate === 'three') return 3;
    if (rating.attributes.rate === 'four') return 4;
    if (rating.attributes.rate === 'five') return 5;
  });

  const averageRatings =
    allRatings.reduce((acc, curr) => acc + (curr || 0), 0) / allRatings.length;

  const ratingStars = Array.from({ length: averageRatings }, (_, i) => (
    <Star key={i} size={20} color="#FFC633" fill="#FFC633" />
  ));

  const numStr = averageRatings.toString();

  if (numStr.includes('.')) {
    const decimal = numStr.split('.')[1];
    if (parseInt(decimal) > 0) {
      ratingStars.push(
        <StarHalf
          key={numStr}
          size={20}
          color="#FFC633"
          fill="#FFC633"
          className="animate-pulse"
        />,
      );
    }
  }

  return (
    <div className="flex items-center gap-2 text-sm">
      {ratingStars}
      <span>{averageRatings}/5</span>
    </div>
  );
};
