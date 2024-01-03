<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <img v-bind="$attrs" :class="cn('', props.class)" />
  <slot></slot>
</template>
