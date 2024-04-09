import { UserType } from '@/types/userType';
import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const usersMe = async (jwt: string) => {
  const populate = '?populate=deep,2';

  try {
    const { data } = await customFetch.get<UserType>(`/users/me${populate}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!data) {
      throw new Error('No user found');
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response?.data?.error?.message);
    }
  }
};
