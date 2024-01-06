<script setup lang="ts">
import Accordion from "@/components/ui/accordion/Accordion.vue";
import AccordionContent from "@/components/ui/accordion/AccordionContent.vue";
import AccordionItem from "@/components/ui/accordion/AccordionItem.vue";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger.vue";
import accordionItems from "@/data/accordionItems";
</script>

<template>
  <Accordion type="single" class="w-full" collapsible>
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value || ''"
    >
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
