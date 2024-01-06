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

        <div class="flex gap-6" v-if="!store.isLoggedIn">
          <router-link :to="RoutePathEnum.REGISTER">
            <Button variant="default">Cadastrar</Button></router-link
          >
          <router-link :to="RoutePathEnum.LOGIN">
            <Button variant="outline">Acessar</Button></router-link
          >
        </div>

        <router-link v-else :to="RoutePathEnum.HOME">
          <Button @click="store.signOutuser" variant="default"
            >Finalizar sessão
          </Button></router-link
        >
        <h1 v-if="store.isLoggedIn">Acesso de: {{ store.emailCredentials }}</h1>
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
import { useUserStore } from "@/stores/users";
import { onMounted } from "vue";
const store = useUserStore();
onMounted(() => {
  store.getUser();
  console.log(store.emailCredentials);
});
</script>
