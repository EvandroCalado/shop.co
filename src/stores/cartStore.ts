import { ProductType } from '@/types';
import { create } from 'zustand';

export interface CartItemProps {
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
}

export interface CartStoreProps {
  cartItems: CartItemProps[];
  addToCart: (product: CartItemProps) => void;
  // removeFromCart: (id: string) => void;
  // increaseQuantity: (id: string) => void;
  // decreaseQuantity: (id: string) => void;
  // clearCart: () => void;
}

export const useCartStore = create<CartStoreProps>((set) => ({
  cartItems: [],
  addToCart: (cartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, cartItem] })),
  // removeFromCart: (id: string) => set((state) => ({ cartItem: state.cartItem.filter((item) => item.id !== id) })),
  // increaseQuantity: (id: string) => set((state) => ({ cartItem: state.cartItem.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)) })),
  // decreaseQuantity: (id: string) => set((state) => ({ cartItem: state.cartItem.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item)) })),
  // clearCart: () => set({ cartItem: [] }),
}));
