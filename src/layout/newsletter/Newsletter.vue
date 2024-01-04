<template>
  <section>
    <HomeContainer>
      <div class="flex flex-col items-center space-y-6">
        <h2
          class="scroll-m-20 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
        >
          Fique por dentro das novidades!
        </h2>
        <p class="leading-7 text-center">
          Assine a nossa newsletter e receba as últimas novidades e ofertas dos
          nossos produtos!
        </p>
        <div class="flex items-center gap-2">
          <Input type="email" placeholder="Coloque o seu email" />
          <Button variant="default">Assinar</Button>
        </div>
        <p class="text-sm text-muted-foreground">
          Ao clicar em assinar você concorda com os
          <span class="underline cursor-pointer">Termos de serviços</span>.
        </p>
      </div>
    </HomeContainer>
  </section>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import Input from "@/components/ui/input/Input.vue";
import Button from "@/components/ui/button/Button.vue";
</script>
