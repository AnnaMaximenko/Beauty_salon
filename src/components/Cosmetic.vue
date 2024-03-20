<template>
  <section class="cosmetic center">
    <h2 class="cosmetic__heading">Косметика</h2>
    <ul class="cosmetic__ul">
      <li class="cosmetic__li">
        <img class="cosmetic__img" src="@/assets/img/cosmetic_1.jpg" alt="" />
      </li>
      <li class="cosmetic__li">
        <div
          class="cosmetic__wrapper"
          v-for="(cosmetic, index) in cosmeticArr"
          :key="index"
        >
          <h4 class="cosmetic__service">{{ cosmetic.service }}</h4>

          <p class="cosmetic__description">{{ cosmetic.text }}</p>

          <hr class="cosmetic__hr" />
        </div>
      </li>
      <li id="reverse-one" class="cosmetic__li">
        <div
          class="cosmetic__wrapper"
          v-for="(cosmetic, index) in cosmeticArr"
          :key="index"
        >
          <h4 class="cosmetic__service">{{ cosmetic.service }}</h4>

          <p class="cosmetic__description">{{ cosmetic.text }}</p>

          <hr class="cosmetic__hr cosmetic__hr-none" />
        </div>
      </li>
      <li class="cosmetic__li">
        <img class="cosmetic__img" src="@/assets/img/cosmetic_2.jpg" alt="" />
      </li>
      <li id="reverse-two" class="cosmetic__li">
        <img class="cosmetic__img" src="@/assets/img/cosmetic_3.jpg" alt="" />
      </li>
      <li class="cosmetic__li">
        <div
          class="cosmetic__wrapper"
          v-for="(cosmetic, index) in cosmeticArr"
          :key="index"
        >
          <h4 class="cosmetic__service">{{ cosmetic.service }}</h4>

          <p class="cosmetic__description">{{ cosmetic.text }}</p>

          <hr class="cosmetic__hr" />
        </div>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data() {
    return {
      cosmeticArr: [
        {
          service: "Профессиональная косметика",
          text: "Наша компания предлагает широкий ассортимент косметики для реконструкции волос. Мы работаем с профессиональными брендами, такими как Felps и Philipp Young, которые предлагают продукты высокого качества. Наши продукты предназначены для восстановления волос после повреждений, таких как окрашивание, химическая завивка или выпрямление. Они также могут использоваться для улучшения общего состояния волос и придания им блеска.",
        },
      ],
    };
  },
};
</script>
