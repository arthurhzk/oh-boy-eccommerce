<script setup lang="ts">
import { ref } from "vue";
import Loader from "@/components/ui/loader/Loader.vue";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button/Button.vue";
import InputLabel from "@/layout/input-label/InputLabel.vue";

const isLoading = ref(false);
async function onSubmit(event: Event) {
  event.preventDefault();
  isLoading.value = true;

  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
}
</script>

<template>
  <HomeContainer>
    <div :class="cn('grid gap-6', $attrs.class ?? '')">
      <form @submit="onSubmit">
        <div class="flex flex-col items-center space-y-4">
          <InputLabel type="text" label="Email:" />
          <InputLabel type="password" label="Senha:" />
          <Button :disabled="isLoading">
            Sign In with Email
            <Loader class="ml-4" v-if="isLoading" />
          </Button>
        </div>
      </form>
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <span class="w-full border-t" />
        </div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            Ou continuar como
          </span>
        </div>
      </div>
    </div>
  </HomeContainer>
</template>
