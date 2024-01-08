import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    cartItems: [] as {
      id: number;
      quantity: number;
      price: number;
      title: string;
    }[],
    quantity: 1,
  }),
  actions: {
    addToCart(product: { id: number; price: number; title: string }) {
      const findProduct = this.cartItems.find((item) => item.id === product.id);
      if (!findProduct) {
        this.cartItems.push({ ...product, quantity: this.quantity });
      } else {
        findProduct.quantity += this.quantity;
      }
      this.quantity = 1;
    },
    removeFromCart(product: { id: number }) {
      const findProduct = this.cartItems.find((item) => item.id === product.id);
      if (findProduct) {
        findProduct.quantity--;
        if (findProduct.quantity === 0) {
          this.cartItems.splice(this.cartItems.indexOf(findProduct), 1);
        }
      }
    },
  },
  getters: {
    totalAmount(): number {
      const total = this.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      return total;
    },
  },
});
