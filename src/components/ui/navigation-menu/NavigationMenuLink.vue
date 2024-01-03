<script setup lang="ts">
import {
  NavigationMenuLink,
  type NavigationMenuLinkEmits,
  type NavigationMenuLinkProps,
  useEmitAsProps,
} from "radix-vue";

const props = defineProps<NavigationMenuLinkProps>();
const emits = defineEmits<NavigationMenuLinkEmits>();
</script>

<template>
  <NavigationMenuLink
    class="cursor-pointer"
    v-bind="{ ...props, ...useEmitAsProps(emits) }"
  >
    <slot></slot>
  </NavigationMenuLink>
</template>
