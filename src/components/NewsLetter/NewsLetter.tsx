import { Mail } from 'lucide-react';
import { Button, Heading, Input } from '..';

export const NewsLetter = () => {
  return (
    <section className="relative px-6 py-6  md:px-16 lg:px-24">
      <div className="flex flex-col items-center justify-between gap-8 rounded-3xl bg-black/95 p-8 md:flex-row">
        <div className="max-w-4xl md:w-2/3">
          <Heading
            title="stay upto date about our latest offers"
            uppercase
            className="text-white"
          />
        </div>

        <div className="space-y-4 md:w-1/3">
          <Input placeholder="Enter your email address" icon={<Mail />} />
          <Button variant="outline" className="w-full">
            subscribe to newsletter
          </Button>
        </div>
      </div>

      <div className="absolute left-0 right-0 top-[50%] -z-10 h-1/2 bg-[#f0f0f0]"></div>
    </section>
  );
};
