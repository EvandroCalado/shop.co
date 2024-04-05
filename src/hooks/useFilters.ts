import { getAllColors, getAllProducts, getAllSizes } from '@/actions';
import { ColorsType, ProductsType, SizesType } from '@/types';
import { useCallback, useEffect, useState } from 'react';

export const useFilters = ({ activeName }: { activeName?: string }) => {
  const [allColors, setAllColors] = useState<ColorsType>();
  const [allSizes, setAllSizes] = useState<SizesType>();
  const [allProducts, setAllProducts] = useState<ProductsType>();

  const [activeClothe, setActiveClothe] = useState('');
  const [activeDressStyle, setActiveDressStyle] = useState('');
  const [activePrice, setActivePrice] = useState(0);
  const [activeColor, setActiveColor] = useState('');
  const [activeSize, setActiveSize] = useState('');

  const getColors = useCallback(async () => {
    const colors = await getAllColors();
    setAllColors(colors);
  }, []);

  const getSizes = useCallback(async () => {
    const sizes = await getAllSizes();
    setAllSizes(sizes);
  }, []);

  const getProducts = useCallback(async () => {
    const products = await getAllProducts(activeName);
    setAllProducts(products);
  }, [activeName]);

  useEffect(() => {
    getColors();
    getSizes();
    getProducts();
  }, [getColors, getSizes, getProducts]);

  return {
    allColors,
    allSizes,
    allProducts,
    activeClothe,
    activeDressStyle,
    activePrice,
    activeColor,
    activeSize,
    setAllProducts,
    setActiveClothe,
    setActiveDressStyle,
    setActivePrice,
    setActiveColor,
    setActiveSize,
    getProducts,
  };
};
