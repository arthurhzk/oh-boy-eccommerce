<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardImage,
} from "@/components/ui/card";

const props = defineProps({
  product: Object,
});
</script>

<template>
  <Card class="w-[304px] h-[250px]">
    <CardHeader>
      <CardImage :src="props.product?.image" />
      <CardTitle>{{ props.product?.title }}</CardTitle>
      <CardDescription>{{ props.product?.description }}</CardDescription>
    </CardHeader>
    <CardContent>{{ props.product?.content }}</CardContent>
  </Card>
</template>
