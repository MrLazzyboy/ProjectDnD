<template>
  <v-card flat>
    <v-card-title class="headline ml-5 mt-5">Новое в сообществе</v-card-title>
    <v-container>
      <v-row justify="space-between">
        <v-col cols="6" v-for="index in 6" :key="index">
          <HomeNewsPost />
        </v-col>
      </v-row>
      <div class="d-flex justify-center">
        <router-link style="color: black" to="forum">Перейти на форум</router-link>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import HomeNewsPost from "@/components/common/HomeNewsPost";
@Component({
  components: {
    HomeNewsPost
  }
})
export default class HomeNews extends Vue {}
</script>
