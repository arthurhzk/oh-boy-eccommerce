<script setup lang="ts">
import Button from "@/components/ui/button/Button.vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Input from "@/components/ui/input/Input.vue";
import Label from "@/components/ui/label/Label.vue";
import Loader from "@/components/ui/loader/Loader.vue";
import { useRegister } from "@/composables/useRegister";
import { useLoaderStore } from "@/stores/loader";
const store = useLoaderStore();
async function onSubmit(event: Event) {
  event.preventDefault();
  store.isLoading = true;
  setTimeout(() => {
    store.isLoading = false;
  }, 3000);
}

const { state, signUpUser } = useRegister();
</script>

<template>
  <form @submit="onSubmit">
    <div class="flex flex-col items-center space-y-4">
      <Card>
        <CardHeader class="space-y-1">
          <CardTitle class="text-2xl"> Registre-se agora mesmo! </CardTitle>
          <CardDescription>
            Coloque o seu email abaixo para criar uma conta
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid grid-cols-2 gap-6">
            <Button variant="outline"> Github </Button>
            <Button variant="outline">
              <svg role="img" viewBox="0 0 24 24" class="mr-2 h-4 w-4">
                <path
                  fill="currentColor"
                  d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                />
              </svg>
              Google
            </Button>
          </div>
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <span class="w-full border-t"></span>
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-background px-2 text-muted-foreground">
                Continuar como
              </span>
            </div>
          </div>

          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              v-model:modelValue="state.email"
              id="email"
              type="email"
              placeholder="ohboy@email.com"
            />
          </div>
          <div class="grid gap-2">
            <Label for="password">Senha</Label>
            <Input
              v-model:modelValue="state.password"
              id="password"
              type="password"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button @click="signUpUser" class="w-full">
            Criar conta <Loader class="ml-4" v-show="store.isLoading" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  </form>
</template>
