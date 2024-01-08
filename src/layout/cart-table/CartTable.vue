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
const store = useCartStore();
</script>

<template>
  <Table>
    <TableCaption>Resumo do Carrinho.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead class="w-[100px]"> ID do Produto </TableHead>
        <TableHead>Nome do Produto</TableHead>
        <TableHead>Quantidade</TableHead>
        <TableHead class="text-right"> Amount </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="invoice in invoices" :key="invoice.invoice">
        <TableCell class="font-medium">
          {{ invoice.invoice }}
        </TableCell>
        <TableCell>{{ invoice.paymentStatus }}</TableCell>
        <TableCell>{{ invoice.paymentMethod }}</TableCell>
        <TableCell class="text-right">
          {{ invoice.totalAmount }}
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
