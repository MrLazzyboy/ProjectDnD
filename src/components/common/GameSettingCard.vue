<template>
  <v-card class="gamecard" color="grey lighten-3" max-width="350px">
    <v-img src="@/assets/img/dndlogo.jpg" class="align-end" color="grey" height="150px"> </v-img>
    <v-card-title>Dungeon&Dragons</v-card-title>
  </v-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class GameSettingCard extends Vue {}
</script>

<style lang="scss" scoped>
.gamecard {
  cursor: pointer;
  border-radius: 10px;
}
</style>
