<script setup lang="ts">
import { Card, CardHeader, CardTitle, CardImage } from "@/components/ui/card";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
const props = defineProps({
  category: Object,
});
</script>

<template>
  <router-link :to="`${RoutePathEnum.CATEGORIES}${props.category?.link}`">
    <Card
      class="w-[304px] h-[304px] flex flex-col gap-4 cursor-pointer items-center"
    >
      <CardHeader>
        <CardImage
          class="w-[120px] h-[120px] m-auto"
          :image="props.category?.image"
        />
        <CardTitle class="text-center">{{
          props.category?.category
        }}</CardTitle>
      </CardHeader>
    </Card>
  </router-link>
</template>
