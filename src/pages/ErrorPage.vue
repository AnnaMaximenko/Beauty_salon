<template>
  <Header />
  <Error />
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Error from "@/components/Error.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Error,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>
