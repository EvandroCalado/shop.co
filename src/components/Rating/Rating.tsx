import { Button, RatingCard } from '..';

export const Rating = () => {
  return (
    <div className="my-4 space-y-4">
      <h3 className="text-2xl font-semibold capitalize">all reviews(123)</h3>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </div>

      <div className="w-full text-center">
        <Button variant="outline">load more reviews</Button>
      </div>
    </div>
  );
};
