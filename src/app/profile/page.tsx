'use client';

import { Button, Heading, Layout } from '@/components';
import { usersMe } from '@/loaders';
import { UserType } from '@/types/userType';
import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';
import { ImagePlus } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, useCallback, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Profile = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState<UserType>();
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('/user.png');

  const router = useRouter();

  const getUser = useCallback(async () => {
    const user = (await usersMe(session?.user.jwt as string)) as UserType;

    if (user) {
      setUserData(user);
      setAvatar(user.avatar.url);
    }
  }, [session?.user.jwt]);

  useEffect(() => {
    getUser();
  }, [getUser, router, session]);

  const handleAvatar = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;

    const image = event.target.files[0];

    if (!image) return;

    setAvatar(URL.createObjectURL(event.target.files[0]));

    try {
      const data = new FormData();

      data.append('ref', 'plugin::users-permissions.user');
      data.append('refId', session?.user.id as string);
      data.append('field', 'avatar');
      data.append('files', image);

      const res = await customFetch.post('/upload', data, {
        headers: {
          Authorization: `Bearer ${session?.user.jwt}`,
        },
      });

      if (res.status === 200) {
        toast.success('Avatar updated successfully');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Error updating avatar');
        console.log(error.response?.data?.error?.message);
      }
    }
  };

  const handleUpdateUser = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await customFetch.put<UserType>(
        `/users/${session?.user.id}`,
        {
          username,
        },
        {
          headers: {
            Authorization: `Bearer ${session?.user.jwt}`,
          },
        },
      );

      if (res.status === 200) {
        toast.success('User updated successfully');
        router.refresh();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error('Error updating user');
        console.log(error.response?.data?.error?.message);
      }
    }
  };

  if (status === 'unauthenticated') {
    router.push('/');
  }

  return (
    <Layout>
      <section className="my-16 flex flex-col items-center justify-between px-6 py-6 md:px-16 lg:px-24">
        <Heading title="my account" uppercase as="h2" />

        {status === 'loading' ? (
          <Heading title="loading..." as="h4" className="my-36 animate-pulse" />
        ) : (
          <form
            className="my-8 flex flex-col gap-8 md:flex-row md:gap-32"
            onSubmit={handleUpdateUser}
          >
            <div className="relative h-56 w-56">
              <Image
                src={avatar}
                alt="avatar"
                fill
                priority
                sizes="(100vw - 2px) 300px, 300px"
                className="rounded-full object-cover"
              />
              <label
                htmlFor="avatar"
                className="absolute left-4 top-0 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2px] border-white bg-black/95 p-1 duration-150 hover:bg-black/70"
              >
                <ImagePlus color="white" />
              </label>
              <input type="file" id="avatar" onChange={handleAvatar} hidden />
            </div>

            <div className="space-y-4">
              <Heading title="account details" as="h4" className="capitalize" />

              <div>
                <label
                  htmlFor="username"
                  className="mb-1 block text-[12px] font-semibold uppercase text-zinc-400"
                >
                  username
                </label>
                <input
                  type="text"
                  id="username"
                  className="block w-full rounded-lg border border-zinc-400 p-2.5 text-sm text-black/95 focus:ring-black/95"
                  defaultValue={userData?.username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="first_name"
                  className="mb-1 block text-[12px] font-semibold uppercase text-zinc-400"
                >
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full rounded-lg border border-zinc-400 p-2.5 text-sm text-zinc-400 focus:ring-black/95"
                  defaultValue={userData?.email}
                  disabled
                />
              </div>

              <Button type="submit" className="text-end">
                save
              </Button>
            </div>
          </form>
        )}
      </section>
    </Layout>
  );
};

export default Profile;
