<template>
  <section class="error center">
    <div class="error__left">
      <img
        class="error__img"
        src="@/assets/img/error_picture.jpg"
        alt="a beautiful girl"
      />
    </div>
    <div class="error__right">
      <h3 class="error__heading">404</h3>
      <p class="error__text">Не удалось найти эту страницу</p>
      <router-link
        class="error__button"
        v-for="link in arr"
        :key="link.id"
        :to="link.url"
      >
        <p class="error__text-button">На главную</p>
        <svg
          class="error__svg"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.72998 8.4353L15.4532 8.29845M10.3482 1.91125L16.8711 8.43424L10.2168 15.0886"
            stroke="white"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          id: 0,
          url: "/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
