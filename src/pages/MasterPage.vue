<template>
  <Header />
  <Master />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Master from "@/components/Master.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Master,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
