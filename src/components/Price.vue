<template>
  <section class="price center">
    <h2 class="price__heading">Цены на услуги</h2>
    <ul class="price__ul">
      <li class="price__li">
        <img class="price__img" src="@/assets/img/price__one.jpg" alt="" />
      </li>
      <li class="price__li price__li-indent">
        <div
          class="price__wrapper"
          v-for="(master, index) in serviceArrFirst"
          :key="index"
        >
          <div class="price__container">
            <h4 class="price__service">{{ master.service }}</h4>
            <p class="price__rate">{{ master.price }}</p>
          </div>

          <p class="price__description">{{ master.text }}</p>

          <hr class="price__hr" />
        </div>
      </li>
      <li id="reverse-one" class="price__li">
        <div
          class="price__wrapper"
          v-for="(master, index) in serviceArrSecond"
          :key="index"
        >
          <div class="price__container">
            <h4 class="price__service">{{ master.service }}</h4>
            <p class="price__rate">{{ master.price }}</p>
          </div>
          <p class="price__description">{{ master.text }}</p>

          <hr class="price__hr" />
        </div>
      </li>
      <li class="price__li">
        <img class="price__img" src="@/assets/img/price__two.jpg" alt="" />
      </li>
      <li id="reverse-two" class="price__li">
        <img class="price__img" src="@/assets/img/price__three.jpg" alt="" />
      </li>
      <li class="price__li">
        <div
          class="price__wrapper"
          v-for="(master, index) in serviceArrThird"
          :key="index"
        >
          <div class="price__container">
            <h4 class="price__service">{{ master.service }}</h4>
            <p class="price__rate">{{ master.price }}</p>
          </div>
          <p class="price__description">{{ master.text }}</p>

          <hr class="price__hr" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      serviceArrFirst: [
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
      ],
      serviceArrSecond: [
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
      ],
      serviceArrThird: [
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
        {
          service: "Женская укладка",
          text: "+ обработк кончинков волос",
          price: "1 000 ₽ ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
