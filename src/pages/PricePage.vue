<template>
  <Header />
  <Price />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Price from "@/components/Price.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Price,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
