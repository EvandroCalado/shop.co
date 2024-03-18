import { Star, StarHalf } from 'lucide-react';

export const RatingItem = () => {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Star size={20} />
      <Star size={20} />
      <Star size={20} />
      <Star size={20} />
      <StarHalf size={20} />
      <span>4.5/5</span>
    </div>
  );
};
