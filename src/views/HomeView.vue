<template>
  <section>
    <div class="flex p-4">
      <HomeContainer class="space-y-6 flex items-center justify-center">
        <div class="flex flex-col justify-center space-y-6">
          <h1
            class="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl"
          >
            Elegância Intemporal
          </h1>

          <p class="leading-7 text-center lg:text-start">
            Explore a simplicidade em nossa loja minimalista, especializada em
            camisetas básicas nas cores atemporais: branco e preto. Desfrute da
            versatilidade elegante dessas peças essenciais, perfeitas para
            qualquer ocasião. Priorizamos qualidade, oferecendo tecidos suaves e
            duráveis para um conforto duradouro. Descubra o poder da
            simplicidade em cada detalhe das nossas roupas.
          </p>
          <div class="flex gap-6">
            <Button variant="default">Comprar</Button>
            <Button variant="outline">Ver mais</Button>
          </div>
        </div>
      </HomeContainer>
      <img class="hidden w-[57%] lg:block" src="@/assets/minimal.webp" alt="" />
    </div>

    <HomeContainer class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Tagline
      </h3>

      <h2
        class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        Produtos em Destaque
      </h2>
      <div class="flex items-center justify-between">
        <p class="leading-7">
          Minimalismo em Destaque: Estilo Puro, Elegância Simples.
        </p>
        <router-link :to="RoutePathEnum.PRODUCTS">
          <Button variant="outline">Ver Todos</Button></router-link
        >
      </div>
    </HomeContainer>
    <HomeContainer>
      <div
        class="flex flex-col items-center justify-center xl:grid xl:grid-cols-4 gap-14 mt-[120px] lg:grid lg:grid-cols-2 md:grid md:grid-cols-2"
      >
        <ProductCard v-for="shirt in shirts" :product="shirt" :key="shirt.id" />
      </div>
    </HomeContainer>
    <HomeContainer class="space-y-4">
      <h3 class="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Tagline
      </h3>

      <h2
        class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      >
        Oferta de Produtos
      </h2>
      <div class="flex items-center justify-between">
        <p class="leading-7">
          Explore Nossos Produtos em Destaque, Elegantes em Preto e Branco, para
          uma Expressão Minimalista de Estilo.
        </p>
        <router-link :to="RoutePathEnum.PRODUCTS">
          <Button variant="outline">Ver Todos</Button></router-link
        >
      </div>
    </HomeContainer>
    <HomeContainer>
      <div
        class="flex flex-col items-center justify-center xl:grid xl:grid-cols-4 gap-14 mt-[120px] lg:grid lg:grid-cols-2 md:grid md:grid-cols-2"
      >
        <ProductCard v-for="shirt in shirts" :product="shirt" />
      </div>
    </HomeContainer>
    <div class="flex mx-[64px]">
      <div class="w-1/2 h-[900px] flex flex-col justify-center space-y-6">
        <HomeContainer>
          <img
            class="hidden md:hidden lg:block"
            src="@/assets/minimalism.webp"
            alt="clothing"
          />
        </HomeContainer>
      </div>
      <div class="h-[900px] flex flex-col justify-center space-y-6">
        <h2
          class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          As melhores roupas para qualquer ocasião.
        </h2>
        <p class="leading-7">
          Explore Nossos Produtos em Destaque, Elegantes em Preto e Branco,<br />
          para uma Expressão Minimalista de Estilo.
        </p>
        <ul class="my-6 ml-6 list-disc">
          <li v-for="item in itemList">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
    <Newsletter />
  </section>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import Button from "@/components/ui/button/Button.vue";
import ProductCard from "@/layout/product-card/ProductCard.vue";
import Newsletter from "@/layout/newsletter/Newsletter.vue";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
import itemList from "@/data/itemList";
import { onMounted } from "vue";
import { useShirts } from "@/composables/useShirts";
const { shirts, getShirts } = useShirts();
onMounted(async () => {
  await getShirts();
});
</script>
