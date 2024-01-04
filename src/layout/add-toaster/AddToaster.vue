<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/toast/use-toast";

const { toast } = useToast();

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <Button
    variant="outline"
    @click="
      () => {
        toast({
          description: props.description,
        });
      }
    "
  >
    {{ props.text }}
  </Button>
</template>
