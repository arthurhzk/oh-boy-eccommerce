<template>
  <Nav></Nav>
  <RouterView></RouterView>
  <Footer></Footer>
  <Toaster />
</template>

<script setup lang="ts">
import Nav from "@/layout/nav/Nav.vue";
import { RouterView } from "vue-router";
import Footer from "@/layout/footer/Footer.vue";
import Toaster from "@/components/ui/toast/Toaster.vue";
</script>
