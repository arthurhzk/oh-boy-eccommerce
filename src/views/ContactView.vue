<template>
  <section>
    <HomeContainer class="mt-[112px] mb-[112px]"
      ><div class="flex items-center justify-between gap-20">
        <div class="space-y-4 flex flex-col justify-center lg:w-1/2">
          <h1
            class="scroll-m-20 text-4xl font-semibold tracking-tight text-center lg:text-5xl"
          >
            Sobre a Marca OH BOY!
          </h1>
          <p>
            Em 2024, na movimentada São Paulo, Arthur Kunz fundou a OH BOY!, uma
            marca de moda que redefine a elegância com suas roupas básicas e
            minimalistas. Cada peça reflete a visão de Arthur para celebrar a
            beleza na simplicidade, incorporando linhas limpas e uma paleta
            clássica de preto e branco. A OH BOY! destaca-se pela versatilidade,
            oferecendo desde camisetas básicas até peças elegantes, perfeitas
            para transitar do escritório para as ruas da cidade. Nosso catálogo
            reflete a autenticidade de quem as veste, proporcionando uma
            declaração de estilo minimalista em cada costura. Na OH BOY!, a
            filosofia de Arthur Kunz transcende as tendências passageiras da
            moda. Cada peça é meticulosamente projetada para expressar a
            individualidade de quem a veste, transformando a simplicidade em uma
            declaração de estilo atemporal.
          </p>
        </div>
        <div class="w-1/2">
          <img
            class="hidden lg:block"
            src="@/assets/minimalism-clothing.webp"
            alt=""
          />
        </div>
      </div>
    </HomeContainer>
  </section>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
</script>
