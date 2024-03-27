import { ProductType } from '@/types';
import { create } from 'zustand';

export interface CartItemProps {
  id: string;
  product: ProductType;
  color: string;
  size: string;
  quantity: number;
  amount: number;
}

export interface CartStoreProps {
  cartItems: CartItemProps[];
  addToCart: (product: CartItemProps) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useCartStore = create<CartStoreProps>((set) => ({
  cartItems: [],
  addToCart: (cartItem) =>
    set((state) => {
      const productAlreadyInCart = state.cartItems.find((item) => {
        return item.id === cartItem.id;
      });

      if (productAlreadyInCart) {
        return {
          cartItems: state.cartItems.map((item) => {
            if (item.id === cartItem.id) {
              return { ...item, quantity: item.quantity + cartItem.quantity };
            }
            return item;
          }),
        };
      }

      return { cartItems: [...state.cartItems, cartItem] };
    }),
  removeFromCart: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
    })),
  clearCart: () => set({ cartItems: [] }),
  increaseQuantity: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    })),
  decreaseQuantity: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    })),
}));
