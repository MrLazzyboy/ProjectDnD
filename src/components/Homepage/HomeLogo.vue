<template>
  <div class="home-header">
    <v-card color="grey lighten-3" flat class="home-card">
      <v-container class="home-container">
        <v-card-title class="headline">
          ProjectD&D - играй с нами
        </v-card-title>
        <v-card-subtitle>
          Добро пожаловать в сервис подбора игр, игроков и мастеров в ролевом мире.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn text>Мероприятия</v-btn>
          <v-btn outlined>Помощь новичкам</v-btn>
        </v-card-actions>
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class HomeLogo extends Vue {}
</script>

<style lang="scss" scoped>
.home-card {
  background: url(../../assets/img/wow.png) no-repeat;
  // паралакс
  // background-attachment: fixed;
  // background-position: center;
  // background-repeat: no-repeat;
  // background-size: cover;
  padding: 7% 0;
}
</style>
