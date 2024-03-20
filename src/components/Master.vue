<template>
  <section class="master center">
    <h3 class="master__title">Наши мастера</h3>
    <div class="master__wrapper">
      <ul class="master__ul" v-for="(master, index) in masterArr" :key="index">
        <div class="box"></div>
        <li class="master__li">
          <img :src="master.img" alt="" class="master__img" />
          <p class="master__name">{{ master.name }}</p>
          <p class="master__profession">{{ master.profession }}</p>
          <p class="master__experience">{{ master.experience }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      masterArr: [
        {
          img: require("@/assets/img/master_1.jpg"),
          name: "Елена Васильевна",
          profession: "Топ мастер",
          experience: "Опыт работы 3 года",
        },
        {
          img: require("@/assets/img/master_2.jpg"),
          name: "Елена Васильевна",
          profession: "Топ мастер",
          experience: "Опыт работы 3 года",
        },
      ],
    };
  },
};
</script>
