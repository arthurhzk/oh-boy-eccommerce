<template>
  <HomeContainer>
    <div class="flex flex-col items-center mt-[80px] mb-[60px] space-y-6">
      <img class="w-1/4" src="@/assets/logo.png" />
      <ul class="flex items-center list-none gap-8">
        <li>Serviços</li>
        <li>Contatos</li>
        <li>Sobre</li>
        <li>Atendimento</li>
      </ul>
      <div class="h-[1px] w-full bg-gray-300"></div>
    </div>
    <p class="leading-7">2024 Oh Boy! Todos os direitos reservados.</p>
  </HomeContainer>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
</script>
