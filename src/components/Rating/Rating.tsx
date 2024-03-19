import { RatingsType } from '@/types/productsType';
import { FC } from 'react';
import { Button, Heading, RatingCard } from '..';

export interface RatingProps {
  ratings: RatingsType;
}

export const Rating: FC<RatingProps> = ({ ratings }) => {
  if (ratings.data.length === 0) {
    return (
      <div className="my-36 flex items-center justify-center">
        <Heading title="No reviews" as="h3" />
      </div>
    );
  }

  return (
    <div className="my-4 space-y-4">
      <h3 className="text-2xl font-semibold capitalize">
        all reviews({ratings.data.length})
      </h3>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {ratings.data.map((rating) => (
          <RatingCard key={rating.id} rating={rating} />
        ))}
      </div>

      {ratings.data.length > 6 && (
        <div className="w-full text-center">
          <Button variant="outline">load more reviews</Button>
        </div>
      )}
    </div>
  );
};
