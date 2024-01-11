<template>
  <HomeContainer class="my-[112px]">
    <div class="flex flex-col items-center justify-center space-y-4">
      <h2
        class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        Categoria de Produtos
      </h2>
      <p class="leading-7">Os melhores produtos separados por categoria.</p>
    </div>

    <div class="mt-20 flex items-center justify-center">
      <Loader
        v-show="store.isLoading"
        class="flex items-center justify-center"
      />
      <div class="flex flex-col md:grid md:grid-cols-2 gap-6">
        <CategoriesCard
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </div>
    </div>
    <Newsletter class="mt-20" />
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import CategoriesCard from "@/layout/categories-card/CategoriesCard.vue";
import Newsletter from "@/layout/newsletter/Newsletter.vue";
import { useFetchCategory } from "@/composables/useFetchCategory";
import Loader from "@/components/ui/loader/Loader.vue";
import { useLoaderStore } from "@/stores/loader";
import { onMounted } from "vue";
const { categories, getCategory } = useFetchCategory();
const store = useLoaderStore();
onMounted(async () => {
  store.isLoading = true;
  await getCategory();
  store.isLoading = false;
});
</script>
