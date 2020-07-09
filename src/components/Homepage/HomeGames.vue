<template>
  <v-card flat>
    <v-card-title class="headline ml-5 mt-5">Игры</v-card-title>
    <v-container>
      <v-row justify="space-between">
        <v-col lg="3" md="4" sm="6" cols="6" v-for="index in 4" :key="index">
          <GameSettingCard />
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <router-link style="color: black" to="events">Все игры</router-link>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import GameSettingCard from "@/components/common/GameSettingCard";
@Component({
  components: {
    GameSettingCard
  }
})
export default class HomeLogo extends Vue {}
</script>
