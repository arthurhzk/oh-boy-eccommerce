<template>
  <Nav></Nav>
  <RouterView></RouterView>
  <Footer></Footer>
</template>

<script setup lang="ts">
import Nav from "@/layout/nav/Nav.vue";
import { RouterView } from "vue-router";
import Footer from "@/layout/footer/Footer.vue";
</script>
