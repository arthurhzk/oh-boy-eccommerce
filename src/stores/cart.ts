import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartItems: [] as any[],
    quantity: 0,
  }),
  actions: {
    addToCart(product: { id: number }) {
      const findProduct = this.cartItems.find((item) => item.id === product.id);
      if (!findProduct) {
        this.cartItems.push(product);
        this.quantity++;
      } else {
        this.quantity++;
      }
    },
    removeFromCart(product: { id: number }) {
      const findProduct = this.cartItems.find((item) => item.id === product.id);
      if (findProduct) {
        this.cartItems.splice(this.cartItems.indexOf(findProduct), 1);
        this.quantity--;
      }
    },
  },
});
