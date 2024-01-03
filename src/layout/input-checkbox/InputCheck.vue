<script setup lang="ts">
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <div class="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label for="terms">{{ props.text }}</Label>
    </div>
  </div>
</template>
