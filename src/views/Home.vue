<template>
  <div class="home-page">
    <HomeLogo />
    <HomeGames />
    <HomeCalendar />
    <HomeNews />
  </div>
</template>

<script>
import HomeLogo from "@/components/Homepage/HomeLogo";
import HomeGames from "@/components/Homepage/HomeGames";
import HomeNews from "@/components/Homepage/HomeNews";
import HomeCalendar from "@/components/Homepage/HomeCalendar";
import { Vue, Component } from "vue-property-decorator";
@Component({
  components: {
    HomeLogo,
    HomeGames,
    HomeNews,
    HomeCalendar
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
