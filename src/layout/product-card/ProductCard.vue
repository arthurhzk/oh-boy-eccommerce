<script setup lang="ts">
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";

const props = defineProps({
  product: Object,
});
</script>

<template>
  <router-link :to="`/product/${props.product?.id}`">
    <Card
      class="w-[304px] h-[304px] flex flex-col gap-4 cursor-pointer items-center"
    >
      <CardHeader>
        <CardImage
          class="w-[120px] h-[120px] m-auto"
          :image="props.product?.image"
        />
        <CardTitle class="text-center">{{ props.product?.title }}</CardTitle>
      </CardHeader>
      <CardContent>R$ {{ props.product?.price.toFixed(2) }}</CardContent>
    </Card>
  </router-link>
</template>
