import { questions } from '@/utils/questions';
import { Heading } from '..';

export const Faq = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {questions.map((question) => (
        <div key={question.id} className="w-full">
          <Heading title={question.question} as="h5" />
          <p className="mt-2 text-zinc-400">{question.response}</p>
        </div>
      ))}
    </div>
  );
};
