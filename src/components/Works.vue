<template>
  <article id="app" class="works center">
    <h2 class="works__heading">Наши работы</h2>
    <div class="works__button-box">
      <button
        v-for="button in buttonsWork"
        :key="button.id"
        @click="changeArticle(button.id)"
        type="button"
        :class="[
          'works__button',
          button.id === buttonWorksIsActive ? 'works__button-active' : false,
        ]"
      >
        {{ button.title }}
      </button>
    </div>

    <ul class="works__ul">
      <li class="works__li" v-for="work in activeWorks" :key="work.id">
        <img :src="work.img" alt="works" class="works__img" />
      </li>
    </ul>
  </article>
</template>
<script>
export default {
  data() {
    return {
      activeWorks: [
        { id: "all", img: require("@/assets/img/works_1.jpg") },
        { id: "all", img: require("@/assets/img/works_2.jpg") },
        { id: "all", img: require("@/assets/img/works_3.jpg") },
        { id: "all", img: require("@/assets/img/works_4.jpg") },
        { id: "all", img: require("@/assets/img/works_5.jpg") },
        { id: "all", img: require("@/assets/img/works_6.jpg") },
        { id: "all", img: require("@/assets/img/works_7.jpg") },
        { id: "all", img: require("@/assets/img/works_8.jpg") },
        { id: "all", img: require("@/assets/img/works_9.jpg") },
      ],
      listOfWorks: [
        { id: "all", img: require("@/assets/img/works_1.jpg") },
        { id: "all", img: require("@/assets/img/works_2.jpg") },
        { id: "all", img: require("@/assets/img/works_3.jpg") },
        { id: "all", img: require("@/assets/img/works_4.jpg") },
        { id: "all", img: require("@/assets/img/works_5.jpg") },
        { id: "all", img: require("@/assets/img/works_6.jpg") },
        { id: "all", img: require("@/assets/img/works_7.jpg") },
        { id: "all", img: require("@/assets/img/works_8.jpg") },
        { id: "all", img: require("@/assets/img/works_9.jpg") },
        { id: "coloring", img: require("@/assets/img/works_9.jpg") },
        { id: "coloring", img: require("@/assets/img/works_4.jpg") },
        { id: "coloring", img: require("@/assets/img/works_7.jpg") },
        { id: "care", img: require("@/assets/img/works_2.jpg") },
        { id: "care", img: require("@/assets/img/works_6.jpg") },
        { id: "care", img: require("@/assets/img/works_8.jpg") },
        { id: "haircut", img: require("@/assets/img/works_1.jpg") },
        { id: "haircut", img: require("@/assets/img/works_3.jpg") },
        { id: "haircut", img: require("@/assets/img/works_5.jpg") },
      ],

      buttonsWork: [
        { id: "all", title: "Показать все" },
        { id: "coloring", title: "Окрашивание" },
        { id: "care", title: "Уход за волосами" },
        { id: "haircut", title: "Стрижка" },
      ],

      buttonWorksIsActive: "all",
    };
  },
  methods: {
    changeArticle(id) {
      const buttonId = id;
      this.activeWorks = [];
      this.listOfWorks.forEach((article) => {
        if (buttonId === article.id) {
          this.buttonWorksIsActive = id;
          this.activeWorks.push(article);
        }
      });
    },
  },
};
</script>
