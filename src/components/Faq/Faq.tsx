import { questions } from '@/utils/questions';
import { Heading } from '..';

export const Faq = () => {
  return (
    <section className="my-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
      {questions.map((question) => (
        <div
          key={question.id}
          className="relative w-full rounded-xl bg-[#f0f0f0] px-4 py-2"
        >
          <span className="absolute -left-4 -top-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/95 text-white">
            {question.id}
          </span>
          <Heading title={question.question} as="h5" />
          <p className="mt-2 text-zinc-500">{question.response}</p>
        </div>
      ))}
    </section>
  );
};
