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
      <CardImage class="w-[32px] h-[32px]" :image="props.product?.icon" />
      <CardTitle>{{ props.product?.title }}</CardTitle>
      <CardDescription>{{ props.product?.description }}</CardDescription>
    </CardHeader>
    <CardContent class="underline cursor-pointer">{{
      props.product?.content
    }}</CardContent>
  </Card>
</template>
