<template>
  <HomeContainer>
    <div class="flex items-center justify-between gap-8">
      <img src="@/assets/logo.png" />
      <div class="flex items-center gap-6">
        <NavigationMenuLink v-for="link in navLinks">
          {{ link }}
        </NavigationMenuLink>
        <Button variant="default">Cadastrar</Button>
        <Button variant="outline">Acessar</Button>
      </div>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import Button from "@/components/ui/button/Button.vue";
import navLinks from "@/data/navLinks";
</script>
