<script setup lang="ts">
import { ref } from "vue";
import Loader from "@/components/ui/loader/Loader.vue";
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/button/Button.vue";
import Input from "@/components/ui/input/Input.vue";
import { useUserStore } from "@/stores/users";
const isLoading = ref(false);
const { state, signInUser } = useUserStore();
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
          <Input v-model:modelValue="state.email" type="text" label="Email:" />
          <Input
            v-model:modelValue="state.password"
            type="password"
            label="Senha:"
          />
          <Button @click="signInUser" :disabled="isLoading">
            Sign In with Email
            <Loader class="ml-4" v-if="isLoading" />
          </Button>
        </div>
      </form>
      <div class="relative">
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-background px-2 text-muted-foreground">
            Ou continuar como
          </span>
        </div>
      </div>
    </div>
  </HomeContainer>
</template>
