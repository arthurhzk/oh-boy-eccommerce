<script setup lang="ts">
import Accordion from "@/components/ui/accordion/Accordion.vue";
import AccordionContent from "@/components/ui/accordion/AccordionContent.vue";
import AccordionItem from "@/components/ui/accordion/AccordionItem.vue";
import AccordionTrigger from "@/components/ui/accordion/AccordionTrigger.vue";
const defaultValue = "item-1";

const accordionItems = [
  {
    value: "item-1",
    title: "Detalhes",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    value: "item-2",
    title: "Frete",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus",
  },
  {
    value: "item-3",
    title: "Garantia",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
</script>

<template>
  <Accordion
    type="single"
    class="w-full"
    collapsible
    :default-value="defaultValue"
  >
    <AccordionItem
      v-for="item in accordionItems"
      :key="item.value"
      :value="item.value"
    >
      <AccordionTrigger>{{ item.title }}</AccordionTrigger>
      <AccordionContent>
        {{ item.content }}
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
