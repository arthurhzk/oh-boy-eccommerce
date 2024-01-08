<template>
  <Loader v-show="store.isLoading" class="flex items-center justify-center" />
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
            <InputLabel
              v-model="cartStore.quantity"
              label="Quantidade"
              type="number"
            />
            <AddToaster
              @click="cartStore.addToCart(item)"
              variant="default"
              text="Comprar"
              description="Produto adicionado ao carrinho!"
            />

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
import ProductAccordion from "@/layout/product-accordion/ProductAccordion.vue";
import Newsletter from "@/layout/newsletter/Newsletter.vue";
import Loader from "@/components/ui/loader/Loader.vue";
import { useLoaderStore } from "@/stores/loader";
import AddToaster from "@/layout/add-toaster/AddToaster.vue";
import { useCartStore } from "@/stores/cart";
const store = useLoaderStore();
const router = useRouter();
const { fetchProductId, product } = useFetchProductId();
const productId = router.currentRoute.value.params.id;
const cartStore = useCartStore();
onMounted(async () => {
  store.isLoading = true;
  await fetchProductId(productId);
  store.isLoading = false;
});
</script>
