<template>
  <HomeContainer>
    <Table>
      <TableCaption v-if="store.cartItems.length === 0"
        >Nenhum produto no carrinho.</TableCaption
      >
      <TableCaption v-else>Resumo do Carrinho.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead class="w-[100px]"> ID do Produto </TableHead>
          <TableHead>Nome do Produto</TableHead>
          <TableHead>Quantidade</TableHead>
          <TableHead class="text-right"> Preço </TableHead>
          <TableHead class="text-right"> </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-for="product in store.cartItems" :key="product.id">
          <TableCell class="font-medium">
            {{ product.id }}
          </TableCell>
          <TableCell>{{ product.title }}</TableCell>
          <TableCell>{{ product.quantity }}</TableCell>
          <TableCell class="text-right">
            R$ {{ product.price.toFixed(2) }}
          </TableCell>
          <Button
            class="mt-1"
            @click="store.removeFromCart(product)"
            variant="destructive"
            >Remover</Button
          >
        </TableRow>
      </TableBody>
    </Table>
    <div class="flex items-center justify-end gap-8">
      <p class="leading-7 font-semibold" v-show="store.cartItems.length > 0">
        Valor total de: R$ {{ store.totalAmount.toFixed(2) }}
      </p>
      <Button
        :class="{
          'cursor-not-allowed disabled:': store.cartItems.length === 0,
        }"
        variant="outline"
        >Finalizar Compra</Button
      >
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCartStore } from "@/stores/cart";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import Button from "@/components/ui/button/Button.vue";
const store = useCartStore();
</script>
