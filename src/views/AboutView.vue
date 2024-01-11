<template>
  <section>
    <div
      class="flex flex-col items-center justify-center md:flex md:flex-row p-4"
    >
      <HomeContainer class="w-1/2 h-[900px] flex flex-col space-y-6">
        <h1
          class="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl"
        >
          Fale Conosco
        </h1>

        <p class="leading-7">
          Estamos aqui para tornar sua experiência conosco ainda mais especial.
          Se você tiver alguma dúvida, sugestão ou quiser tirar alguma dúvida,
          não hesite em entrar em contato.
        </p>
        <InputLabel label="Name" type="text" />
        <InputLabel label="Email" type="email" />
        <TextLabel label="Mensagem" placeholder="Digite a sua mensagem..." />
        <InputCheck text="Eu aceito os termos" />
        <div class="flex gap-6">
          <AddToaster
            variant="default"
            text="Enviar"
            description="Mensagem enviada com sucesso! Entraremos em contato assim que possível"
          ></AddToaster>
        </div>
      </HomeContainer>
      <Loader v-if="isLoading" />
      <Map v-else></Map>
    </div>

    <HomeContainer>
      <div class="flex items-center justify-between">
        <div class="flex flex-col md:flex md:justify-between">
          <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
            Nossa loja possui os <br />
            melhores tecidos do mercado
          </h4>
          <div class="flex items-center gap-6">
            <RelumeIcon class="w-[100px]" />
            <WebFlow class="w-[100px]" />
            <RelumeIcon class="w-[100px]" />
            <WebFlow class="w-[100px]" />
          </div>
        </div>
      </div>
    </HomeContainer>
    <HomeContainer class="mt-[120px] mb-[120px]">
      <div class="grid grid-cols-2 md:flex md:justify-around">
        <ServiceCard
          v-for="(product, index) in serviceLinks"
          :key="index"
          :product="product"
          :icon="product.icon"
        />
      </div>
    </HomeContainer>
  </section>
</template>

<script setup lang="ts">
import HomeContainer from "@/components/ui/container/HomeContainer.vue";
import InputLabel from "@/layout/input-label/InputLabel.vue";
import InputCheck from "@/layout/input-checkbox/InputCheck.vue";
import ServiceCard from "@/layout/service-card/ServiceCard.vue";
import Map from "@/layout/map/Map.vue";
import RelumeIcon from "@/assets/icons/partner-icons/RelumeIcon.vue";
import WebFlow from "@/assets/icons/partner-icons/WebFlow.vue";
import serviceLinks from "@/data/serviceLinks";
import Loader from "@/components/ui/loader/Loader.vue";
import TextLabel from "@/layout/text-label/TextLabel.vue";
import { useLoader } from "@/composables/useLoader";
import AddToaster from "@/layout/add-toaster/AddToaster.vue";
const { isLoading } = useLoader();
</script>
