<template>
  <section class="flex flex-col items-center justify-center h-screen space-y-6">
    <h1 class="text-4xl font-semibold tracking-tight lg:text-5xl">404</h1>
    <p class="leading-7">
      Desculpe, a página que você está procurando não foi encontrada.
    </p>
    <router-link :to="RoutePathEnum.HOME">
      <Button variant="outline"
        >Voltar para a página inicial</Button
      ></router-link
    >
  </section>
</template>

<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
</script>
