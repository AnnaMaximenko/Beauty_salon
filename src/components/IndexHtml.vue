<template>
  <section class="introduction">
    <div class="introduction__box">
      <h2 class="introduction__title center">
        Студия реконструкции <br />и&nbsp;колористики<br />&laquo;Best
        hair&raquo;
      </h2>
    </div>
  </section>
  <section class="information center">
    <svg
      width="80"
      height="64"
      viewBox="0 0 80 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="information__svg"
    >
      <path
        d="M22.0513 36.5714C26.1538 36.5714 29.4017 37.8546 31.7949 40.4211C34.359 42.8271 35.6411 46.0351 35.6411 50.0451C35.6411 54.3759 34.1026 57.8246 31.0257 60.391C28.1197 62.797 24.1026 64 18.9744 64C12.9915 64 8.29064 61.8346 4.87183 57.5038C1.62397 53.1729 0 46.9975 0 38.9774C0 31.7594 1.70941 25.1028 5.12821 19.0075C8.54702 12.7519 13.6752 6.49623 20.5129 0.240597C20.6838 0.0801979 20.9402 0 21.282 0C21.7949 0 22.2222 0.2406 22.5641 0.721797C22.906 1.203 22.906 1.604 22.5641 1.9248C14.188 9.94485 9.99999 19.4085 9.99999 30.3158C9.99999 34.807 10.8547 38.0952 12.5641 40.1805C14.1026 37.7744 17.265 36.5714 22.0513 36.5714ZM66.4103 36.5714C70.5128 36.5714 73.7607 37.8546 76.1538 40.4211C78.7179 42.8271 80 46.0351 80 50.0451C80 54.3759 78.4615 57.8246 75.3846 60.391C72.4786 62.797 68.4616 64 63.3334 64C57.3505 64 52.6496 61.8346 49.2308 57.5038C45.9829 53.1729 44.359 46.9975 44.359 38.9774C44.359 31.7594 46.0684 25.1028 49.4872 19.0075C52.906 12.7519 58.0342 6.49623 64.8718 0.240597C65.0427 0.0801979 65.2992 0 65.641 0C66.1539 0 66.5812 0.2406 66.9231 0.721797C67.265 1.203 67.265 1.604 66.9231 1.9248C58.547 9.94485 54.359 19.4085 54.359 30.3158C54.359 34.807 55.2137 38.0952 56.9231 40.1805C58.4616 37.7744 61.624 36.5714 66.4103 36.5714Z"
        fill="white"
      />
    </svg>
    <div class="information__wrapper">
      <p class="information__text">
        Best hair&nbsp;&mdash; это место, где работают профессионалы своего
        дела. Мы&nbsp;предлагаем широкий спектр услуг по&nbsp;уходу
        за&nbsp;вашими волосами, используя только самые лучшие
        и&nbsp;современные технологии.
      </p>
      <p class="information__text">
        Наши опытные специалисты помогут подобрать наиболее подходящие процедуры
        и&nbsp;дадут рекомендации по&nbsp;домашнему уходу.
      </p>
      <p class="information__text">
        Мы&nbsp;стремимся сделать ваши волосы здоровыми и&nbsp;красивыми!
      </p>
    </div>
  </section>
  <section class="reviews center">
    <ul class="reviews__ul" id="app">
      <li class="reviews__li" v-for="(item, index) in reviewsArr" :key="index">
        <svg
          class="reviews__svg"
          width="118"
          height="20"
          viewBox="0 0 118 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_29170_290)">
            <path
              d="M33.8842 0.644572C34.2323 -0.214858 35.4177 -0.214857 35.7657 0.644574L37.8198 5.71708C37.9666 6.0794 38.2984 6.32696 38.6792 6.35831L44.0111 6.79735C44.9144 6.87173 45.2807 8.02961 44.5924 8.63516L40.5302 12.2092C40.24 12.4644 40.1132 12.8651 40.2019 13.2466L41.443 18.5905C41.6533 19.4959 40.6943 20.2116 39.9209 19.7264L35.356 16.8627C35.03 16.6581 34.6199 16.6581 34.2939 16.8627L29.729 19.7264C28.9556 20.2116 27.9966 19.4959 28.2069 18.5905L29.448 13.2466C29.5366 12.8651 29.4099 12.4644 29.1198 12.2092L25.0574 8.63516C24.3691 8.02961 24.7355 6.87173 25.6388 6.79735L30.9707 6.35831C31.3516 6.32696 31.6833 6.0794 31.83 5.71708L33.8842 0.644572Z"
              fill="#CDAA7D"
            />
          </g>
          <g clip-path="url(#clip1_29170_290)">
            <path
              d="M82.4841 0.644572C82.8321 -0.214858 84.0175 -0.214857 84.3655 0.644574L86.4197 5.71708C86.5665 6.0794 86.8983 6.32696 87.2791 6.35831L92.6109 6.79735C93.5143 6.87173 93.8806 8.02961 93.1923 8.63516L89.13 12.2092C88.8399 12.4644 88.7131 12.8651 88.8018 13.2466L90.0428 18.5905C90.2531 19.4959 89.2942 20.2116 88.5207 19.7264L83.9559 16.8627C83.6298 16.6581 83.2198 16.6581 82.8937 16.8627L78.3289 19.7264C77.5555 20.2116 76.5965 19.4959 76.8067 18.5905L78.0478 13.2466C78.1365 12.8651 78.0098 12.4644 77.7196 12.2092L73.6573 8.63516C72.969 8.02961 73.3353 6.87173 74.2387 6.79735L79.5706 6.35831C79.9514 6.32696 80.2832 6.0794 80.4299 5.71708L82.4841 0.644572Z"
              fill="#CDAA7D"
            />
          </g>
          <g clip-path="url(#clip2_29170_290)">
            <path
              d="M9.58417 0.644572C9.93221 -0.214858 11.1176 -0.214857 11.4656 0.644574L13.5198 5.71708C13.6666 6.0794 13.9984 6.32696 14.3792 6.35831L19.711 6.79735C20.6144 6.87173 20.9807 8.02961 20.2924 8.63516L16.2301 12.2092C15.94 12.4644 15.8132 12.8651 15.9019 13.2466L17.1429 18.5905C17.3532 19.4959 16.3943 20.2116 15.6208 19.7264L11.056 16.8627C10.7299 16.6581 10.3199 16.6581 9.99383 16.8627L5.42898 19.7264C4.65555 20.2116 3.69656 19.4959 3.90683 18.5905L5.14794 13.2466C5.2366 12.8651 5.10987 12.4644 4.81973 12.2092L0.757378 8.63516C0.0691005 8.02961 0.435409 6.87173 1.33878 6.79735L6.67068 6.35831C7.05152 6.32696 7.38328 6.0794 7.53 5.71708L9.58417 0.644572Z"
              fill="#CDAA7D"
            />
          </g>
          <g clip-path="url(#clip3_29170_290)">
            <path
              d="M106.784 0.644572C107.132 -0.214858 108.318 -0.214857 108.666 0.644574L110.72 5.71708C110.867 6.0794 111.198 6.32696 111.579 6.35831L116.911 6.79735C117.814 6.87173 118.181 8.02961 117.492 8.63516L113.43 12.2092C113.14 12.4644 113.013 12.8651 113.102 13.2466L114.343 18.5905C114.553 19.4959 113.594 20.2116 112.821 19.7264L108.256 16.8627C107.93 16.6581 107.52 16.6581 107.194 16.8627L102.629 19.7264C101.856 20.2116 100.897 19.4959 101.107 18.5905L102.348 13.2466C102.437 12.8651 102.31 12.4644 102.02 12.2092L97.9573 8.63516C97.2691 8.02961 97.6354 6.87173 98.5387 6.79735L103.871 6.35831C104.251 6.32696 104.583 6.0794 104.73 5.71708L106.784 0.644572Z"
              fill="#CDAA7D"
            />
          </g>
          <g clip-path="url(#clip4_29170_290)">
            <path
              d="M58.1843 0.644572C58.5323 -0.214858 59.7177 -0.214857 60.0657 0.644574L62.1199 5.71708C62.2667 6.0794 62.5985 6.32696 62.9793 6.35831L68.3111 6.79735C69.2145 6.87173 69.5808 8.02961 68.8925 8.63516L64.8302 12.2092C64.5401 12.4644 64.4133 12.8651 64.502 13.2466L65.743 18.5905C65.9533 19.4959 64.9944 20.2116 64.2209 19.7264L59.6561 16.8627C59.33 16.6581 58.92 16.6581 58.5939 16.8627L54.0291 19.7264C53.2556 20.2116 52.2967 19.4959 52.5069 18.5905L53.748 13.2466C53.8367 12.8651 53.71 12.4644 53.4198 12.2092L49.3575 8.63516C48.6692 8.02961 49.0355 6.87173 49.9389 6.79735L55.2708 6.35831C55.6516 6.32696 55.9834 6.0794 56.1301 5.71708L58.1843 0.644572Z"
              fill="#CDAA7D"
            />
          </g>
          <defs>
            <clipPath id="clip0_29170_290">
              <rect
                width="20.25"
                height="20"
                fill="white"
                transform="translate(24.7)"
              />
            </clipPath>
            <clipPath id="clip1_29170_290">
              <rect
                width="20.25"
                height="20"
                fill="white"
                transform="translate(73.2998)"
              />
            </clipPath>
            <clipPath id="clip2_29170_290">
              <rect
                width="20.25"
                height="20"
                fill="white"
                transform="translate(0.399902)"
              />
            </clipPath>
            <clipPath id="clip3_29170_290">
              <rect
                width="20.25"
                height="20"
                fill="white"
                transform="translate(97.5999)"
              />
            </clipPath>
            <clipPath id="clip4_29170_290">
              <rect
                width="20.25"
                height="20"
                fill="white"
                transform="translate(49)"
              />
            </clipPath>
          </defs>
        </svg>
        <p class="reviews__text">{{ item.text }}</p>
        <div class="reviews__wrapper">
          <img :src="item.img" alt="reviews photo" class="reviews__img" />
          <div class="reviews__container">
            <p class="reviews__name">{{ item.name }}</p>
            <p class="reviews__profession">{{ item.proffesion }}</p>
          </div>
        </div>
      </li>
    </ul>
  </section>
  <div class="cosmetics center">
    <ul id="cosmetic" class="cosmetics__ul">
      <li
        class="cosmetics__li"
        v-for="(item, index) in cosmeticsArr"
        :key="index"
      >
        <img :src="item.svg" alt="{{item.alt}}" />
      </li>
    </ul>
  </div>
  <section class="example-work center"></section>
</template>

<script>
export default {
  data() {
    return {
      reviewsArr: [
        {
          text: "Мастера студии знают свое дело и используют качественные материалы. Мои волосы стали выглядеть здоровыми и блестящими. Рекомендую эту студию!",
          img: require("@/assets/img/reviews_photo.jpg"),
          name: "Dana Hale",
          proffesion: "UI/UX Designer, Iniry",
        },
        {
          text: "Специалисты студии очень внимательные и вежливые. Процедуру сделали аккуратно и качественно. Волосы стали выглядеть здоровыми и блестящими. Студия уютная.",
          img: require("@/assets/img/reviews_photo.jpg"),
          name: "Dana Hale",
          proffesion: "UI/UX Designer, Iniry",
        },
        {
          text: "Атмосфера в студии очень уютная и доброжелательная, что способствует расслаблению и комфортному пребыванию во время процедур.",
          img: require("@/assets/img/reviews_photo.jpg"),
          name: "Dana Hale",
          proffesion: "UI/UX Designer, Iniry",
        },
        {
          text: "Результат процедуры - волосы стали гладкими, блестящими и легко расчесывались. Мне дали рекомендации по уходу за волосами. Обязательно вернусь в эту студию еще не раз.",
          img: require("@/assets/img/reviews_photo.jpg"),
          name: "Dana Hale",
          proffesion: "UI/UX Designer, Iniry",
        },
      ],
      cosmeticsArr: [
        {
          svg: require("@/assets/img/cosmetics_1.svg"),
          alt: "cosmetic 1",
        },
        {
          svg: require("@/assets/img/cosmetics_2.svg"),
          alt: "cosmetic 1",
        },
        {
          svg: require("@/assets/img/cosmetics_3.svg"),
          alt: "cosmetic 1",
        },
        {
          svg: require("@/assets/img/cosmetics_4.svg"),
          alt: "cosmetic 1",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
