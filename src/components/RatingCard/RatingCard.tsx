import { Star, StarHalf } from 'lucide-react';
import { Heading } from '..';

export const RatingCard = () => {
  return (
    <div className="space-y-2 rounded-xl border border-[#f0f0f0] p-4">
      <div className="flex items-center gap-2 text-sm">
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <Star size={20} />
        <StarHalf size={20} />
      </div>

      <Heading title="sarah m." as="h6" className="capitalize" />

      <p className="text-sm text-zinc-400">
        I&apos;m blown away by the quality and style of the clothes I received
        from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve
        bought has exceeded my expectations.
      </p>
    </div>
  );
};
