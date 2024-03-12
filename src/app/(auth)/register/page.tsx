'use client';

import { Button, Heading, Input } from '@/components';
import { zodResolver } from '@hookform/resolvers/zod';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';

const Register = () => {
  const router = useRouter();

  const registerSchema = z.object({
    username: z
      .string()
      .min(3, 'username must be at least 3 characters')
      .max(20, 'username must be a maximum of 20 characters'),
    email: z.string().email('please insert a valid email'),
    password: z
      .string()
      .min(3, 'password must be at least 3 characters')
      .max(20, 'password must be a maximum of 20 characters'),
  });

  type LoginData = z.infer<typeof registerSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ resolver: zodResolver(registerSchema) });

  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (res?.status === 401) {
      toast.error('Invalid credentials');
      return;
    }

    if (res.status === 200) {
      toast.success('User created successfully');
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full rounded-xl border border-[#f0f0f0] px-4 py-6 shadow-xl sm:w-2/3 lg:w-2/5 xl:w-1/4 [&>div>input]:mt-4 [&>div>svg]:mt-4"
      >
        <Heading
          title="register"
          as="h3"
          className="mb-8 text-center capitalize"
        />

        <p className="mb-2 text-sm text-zinc-500">Register a new user</p>

        <Input
          type="text"
          placeholder="Enter you username"
          variant="contrast"
          icon={<User />}
          register={register('username')}
        />
        {errors.username && (
          <span className="text-sm text-red-500">
            {errors.username.message}
          </span>
        )}

        <Input
          type="email"
          placeholder="Enter you email address"
          variant="contrast"
          icon={<Mail />}
          register={register('email')}
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
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
            {errors.password.message}
          </span>
        )}

        <p className="my-6 text-center text-sm text-zinc-500">
          Already account ?
          <Link
            href="/login"
            className="ml-2 font-semibold text-black/95 underline duration-150 hover:text-zinc-500"
          >
            Login
          </Link>
        </p>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
