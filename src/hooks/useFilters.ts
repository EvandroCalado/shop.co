import { getAllColors, getAllProducts, getAllSizes } from '@/actions';
import { ColorsType, ProductsType, SizesType } from '@/types';
import { customFetch } from '@/utils/customFetch';
import { useCallback, useEffect, useState } from 'react';

export interface UseFilterProps {
  activeName: string;
  currentPage: number;
}

export const useFilters = ({ activeName, currentPage }: UseFilterProps) => {
  const [allColors, setAllColors] = useState<ColorsType>();
  const [allSizes, setAllSizes] = useState<SizesType>();
  const [allProducts, setAllProducts] = useState<ProductsType>();

  const [activeClothe, setActiveClothe] = useState('');
  const [activeDressStyle, setActiveDressStyle] = useState('');
  const [activePrice, setActivePrice] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const [activeSize, setActiveSize] = useState('');

  const populate = '?populate=deep,3';
  const nameFilter = activeName
    ? `&filters[name][$containsi]=${activeName}`
    : '';
  const clotheFilter = activeClothe
    ? `&filters[categories][slug][$eq]=${activeClothe}`
    : '';
  const priceFilter = activePrice ? `&filters[price][$lte]=${activePrice}` : '';
  const colorFilter = activeColor
    ? `&filters[colors][slug][$eq]=${activeColor}`
    : '';
  const sizeFilter = activeSize
    ? `&filters[sizes][slug][$eq]=${activeSize}`
    : '';
  const dressStyleFilter = activeDressStyle
    ? `&filters[dress_style][slug][$eq]=${activeDressStyle}`
    : '';
  const pagination = `&pagination[page]=${currentPage}&pagination[pageSize]=6`;

  const url = `${populate}${nameFilter}${clotheFilter}${priceFilter}${colorFilter}${sizeFilter}${dressStyleFilter}${pagination}`;

  const getColors = useCallback(async () => {
    const colors = await getAllColors();
    setAllColors(colors);
  }, []);

  const getSizes = useCallback(async () => {
    const sizes = await getAllSizes();
    setAllSizes(sizes);
  }, []);

  const getProducts = useCallback(async () => {
    const products = await getAllProducts({
      loadProducts: {
        loadAll: async () => await customFetch.get(`/products${url}`),
      },
    });
    setAllProducts(products);
  }, [url]);

  useEffect(() => {
    getColors();
    getSizes();
    getProducts();
  }, [getColors, getProducts, getSizes]);

  return {
    all: {
      allColors,
      allSizes,
      allProducts,
    },
    active: {
      activeClothe,
      activeDressStyle,
      activePrice,
      activeColor,
      activeSize,
    },
    setActive: {
      setAllProducts,
      setActiveClothe,
      setActiveDressStyle,
      setActivePrice,
      setActiveColor,
      setActiveSize,
    },
    getProducts,
  };
};
