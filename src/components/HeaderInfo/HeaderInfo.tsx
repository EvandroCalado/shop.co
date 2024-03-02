import Link from 'next/link';

export const HeaderInfo = () => {
  return (
    <div className="flex h-10 w-full items-center justify-center gap-2 bg-black/95 px-4 text-sm text-white">
      <h4>Sing up and get 20% off to your first order.</h4>
      <Link
        href="/register"
        className="border-b font-bold duration-150 hover:brightness-90"
      >
        Sign Up Now
      </Link>
    </div>
  );
};
