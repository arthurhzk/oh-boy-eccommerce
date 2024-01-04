<template>
  <HomeContainer class="mt-[120px] mb-[120pb]">
    <div class="mt-24" v-for="item in product">
      <BreadCrumb class="mb-8" :title="item.title" />
      <div class="flex">
        <div class="w-1/2">
          <img class="w-[380px] h-[380px] ml-[40px]" :src="item.image" alt="" />
        </div>
        <div class="w-1/2 flex items-start justify-start">
          <div class="space-y-2 flex flex-col">
            <h2
              class="mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
            >
              {{ item.title }}
            </h2>
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
              R$ {{ item.price.toFixed(2) }}
            </h4>
            <p class="leading-7 [&:not(:first-child)]:mt-6">
              {{ item.description }}
            </p>
            <InputLabel label="Quantidade" type="number" />
            <Button variant="default">Adicionar ao Carrinho</Button>
            <ProductAccordion />
          </div>
        </div>
      </div>
    </div>
  </HomeContainer>
  <Newsletter class="mt-[120px]" />
</template>

<script lang="ts" setup>
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import BreadCrumb from "@/layout/bread-crumb/BreadCrumb.vue";
import { useFetchProductId } from "@/composables/useFetchProductId";
import { useRouter } from "vue-router";
import { onMounted } from "vue";
import InputLabel from "@/layout/input-label/InputLabel.vue";
import Button from "@/components/ui/button/Button.vue";
import ProductAccordion from "@/layout/product-accordion/ProductAccordion.vue";
import Newsletter from "@/layout/newsletter/Newsletter.vue";
const router = useRouter();
const { fetchProductId, product } = useFetchProductId();
const productId = router.currentRoute.value.params.id;
onMounted(async () => {
  await fetchProductId(productId);
});
</script>
