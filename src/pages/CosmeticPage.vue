<template>
  <Header />
  <Cosmetic />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Cosmetic from "@/components/Cosmetic.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Cosmetic,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
