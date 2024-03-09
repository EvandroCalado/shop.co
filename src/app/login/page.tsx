'use client';

import { Button, Heading, Input } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail } from 'lucide-react';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

const Login = () => {
  const router = useRouter();

  const loginSchema = z.object({
    identifier: z.string().email('please, insert a valid email'),
    password: z
      .string()
      .min(3, 'password must be at least 3 characters')
      .max(20, 'password must be a maximum of 20 characters'),
  });

  type LoginData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const res = await signIn('credentials', {
      ...data,
      redirect: false,
      callbackUrl: '/',
    });

    if (res?.status === 401) {
      throw new Error('Invalid credentials');
    }

    router.push(res?.url || '/');
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-xl border border-[#f0f0f0] px-4 py-6 shadow-xl sm:w-2/3 lg:w-2/5 xl:w-1/4 [&>div>input]:mt-4 [&>div>svg]:mt-4"
      >
        <Heading
          title="login"
          as="h3"
          className="mb-8 text-center capitalize"
        />

        <p className="mb-2 text-sm text-zinc-500">Welcome back !</p>

        <Input
          type="email"
          placeholder="Enter you email address"
          variant="contrast"
          icon={<Mail />}
          register={register('identifier')}
        />
        {errors.identifier && (
          <span className="text-sm text-red-500">
            {errors.identifier.message}
          </span>
        )}

        <Input
          type="password"
          placeholder="Enter you password"
          variant="contrast"
          icon={<Lock />}
          register={register('password')}
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password?.message}
          </span>
        )}

        <p className="my-6 text-center text-sm text-zinc-500">
          Not a member ?
          <Link
            href="/register"
            className="ml-2 font-semibold text-black/95 underline duration-150 hover:text-zinc-500"
          >
            Register
          </Link>
        </p>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Login;
