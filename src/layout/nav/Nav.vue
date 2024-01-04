<template>
  <HomeContainer>
    <div class="flex items-center justify-between gap-8">
      <img src="@/assets/logo.png" />
      <div class="flex items-center gap-6">
        <div v-for="link in navLinks">
          <router-link
            :to="link.path || '/'"
            :class="{ 'font-semibold': $route.path === link.path }"
          >
            <NavigationMenuLink>
              {{ link.name }}
            </NavigationMenuLink>
          </router-link>
        </div>
        <router-link :to="RoutePathEnum.REGISTER">
          <Button variant="default">Cadastrar</Button></router-link
        >
        <router-link :to="RoutePathEnum.LOGIN">
          <Button variant="outline">Acessar</Button></router-link
        >
      </div>
    </div>
  </HomeContainer>
</template>

<script setup lang="ts">
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import Button from "@/components/ui/button/Button.vue";
import navLinks from "@/data/navLinks";
import { RoutePathEnum } from "@/domain/enums/routeEnums";
</script>
