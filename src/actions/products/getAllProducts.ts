import { customFetch } from '@/utils/customFetch';
import { AxiosError } from 'axios';

export const getAllProducts = async (
  activeClothe = '',
  activePrice = '',
  activeColor = '',
  activeSize = '',
  activeDressStyle = '',
  page = '1',
) => {
  const populate = '?populate=deep,3';
  const clotheFilter =
    activeClothe && `&filters[categories][slug][$eq]=${activeClothe}`;
  const priceFilter = activePrice && `&filters[price][$lte]=${activePrice}`;
  const colorFilter =
    activeColor && `&filters[colors][slug][$eq]=${activeColor}`;
  const sizeFilter = activeSize && `&filters[sizes][slug][$eq]=${activeSize}`;
  const dressStyleFilter =
    activeDressStyle && `&filters[dress_style][slug][$eq]=${activeDressStyle}`;
  const pagination = page
    ? `&pagination[page]=${page}&pagination[pageSize]=6`
    : '&pagination[page]=1&pagination[pageSize]=6';

  const url = `${populate}${clotheFilter}${priceFilter}${colorFilter}${sizeFilter}${dressStyleFilter}${pagination}`;

  // console.log(url);

  try {
    const { data } = await customFetch.get(`/products${url}`);

    if (!data) {
      throw new Error('No products found');
    }

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data?.error?.message);
    }
  }
};
