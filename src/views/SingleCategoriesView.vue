<template>
  <HomeContainer>
    <div class="flex items-center justify-center">
      <h1 class="text-4xl font-semibold tracking-tight lg:text-5xl">
        {{ categoryName }}
      </h1>
    </div>

    <div class="grid grid-cols-4 items-center justify-center gap-4 mt-[120px]">
      <div v-for="shirt in shirts">
        <ProductCard :product="shirt" />
      </div>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { useShirts } from "@/composables/useShirts";
import { useRouter } from "vue-router";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import ProductCard from "@/layout/product-card/ProductCard.vue";
import { onMounted, ref } from "vue";
const { getShirts, getPants, getAccessories, getGlasses, getProducts, shirts } =
  useShirts();
const router = useRouter();
const categoryName = ref("");
onMounted(async () => {
  const category = router.currentRoute.value.params.category;
  if (category === "shirts") {
    categoryName.value = "Camisetas";
    await getShirts();
  } else if (category === "pants") {
    categoryName.value = "Calças";
    await getPants();
  } else if (category === "accessories") {
    categoryName.value = "Acessórios";
    await getAccessories();
  } else if (category === "glasses") {
    categoryName.value = "Óculos";
    await getGlasses();
  } else {
    await getProducts();
    categoryName.value = "Todos os Produtos";
  }
});
</script>
