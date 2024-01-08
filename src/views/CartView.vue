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
          <Button @click="store.removeFromCart(product)" variant="destructive"
            >Deletar</Button
          >
        </TableRow>
      </TableBody>
    </Table>
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
