<script setup lang="ts">
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="grid w-full gap-1.5">
    <Label for="message">{{ props.label }}</Label>
    <Textarea id="message" :placeholder="props.placeholder"></Textarea>
  </div>
</template>
