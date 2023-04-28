<template>
  <navbar></navbar>
  <div class="home">
    <Hero></Hero>
    <Products></Products>
    <About id="About"></About>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Products from "@/components/Products/Products.vue";
import About from "@/components/About.vue";
export default {
  name: "HomeView",
  components: {
    Hero,
    Products,
    About,
    Navbar,
  },
};
</script>
