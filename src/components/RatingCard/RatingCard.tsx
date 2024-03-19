import { RatingType } from '@/types/productsType';
import { formatDate } from '@/utils/formatDate';
import { ratingStars } from '@/utils/ratingStars';
import { Star } from 'lucide-react';
import { FC } from 'react';
import { Heading } from '..';

export interface RatingCardProps {
  rating: RatingType;
}

export const RatingCard: FC<RatingCardProps> = ({ rating }) => {
  const { avaliation, rate, user, createdAt } = rating.attributes;
  const { username } = user.data.attributes;

  return (
    <div className="h-48 space-y-2 rounded-xl border border-[#f0f0f0] p-4">
      <div className="flex items-center gap-2 text-sm">
        {ratingStars.map((star) => {
          if (star.rateName === rate) {
            return Array.from({ length: star.rate }).map((_, i) => (
              <Star key={i} color="#FFC633" fill="#FFC633" />
            ));
          }
        })}
      </div>

      <Heading title={username} as="h6" className="capitalize" />

      <p className="line-clamp-3 text-sm text-zinc-400">{avaliation}</p>

      <div className="text-sm font-bold text-zinc-400">
        Posted on {formatDate(createdAt)}
      </div>
    </div>
  );
};
