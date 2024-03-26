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
  // clearCart: () => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  // totalItems: number;
  // totalAmount: number;
  // totalDiscount: number;
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
  // clearCart: () => set({ cartItem: [] }),
  increaseQuantity: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem,
      ),
    })),
  decreaseQuantity: (id: string) =>
    set((state) => ({
      cartItems: state.cartItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
        )
        .filter((item) => item.quantity > 0),
    })),
  // totalItems: () => set({ cartItem: [] }),
  // totalAmount: () => set({ cartItem: [] }),
  // totalDiscount: () => set({ cartItem: [] }),
}));
