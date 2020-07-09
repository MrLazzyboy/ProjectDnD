<template>
  <v-card class="gamecard" color="grey lighten-3" max-width="400px">
    <v-img src="@/assets/img/dndlogo.jpg" class="" color="grey" height="100px"></v-img>
    <v-card-subtitle class="pb-0">Время проведения игры</v-card-subtitle>
    <v-card-title class="pt-0 pb-0">Dungeon&Dragons</v-card-title>
    <v-card-text class="pb-0">
      <v-container>
        <v-row align-content="space-between">
          <v-chip-group column>
            <v-chip outlined v-for="tag in tags" :key="tag">
              {{ tag }}
            </v-chip>
          </v-chip-group>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <span size="0.7rem">Участников: 2/10</span>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'game', params: { id: 13 } }" depressed small color="grey lighten-2"
        >Подробнее</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component
export default class GameCard extends Vue {
  tags = ["DnD 5e", "Для новичков", "Roll20", "Онлайн", "Discord"];
}
</script>

<style lang="scss" scoped>
.gamecard {
  cursor: pointer;
  border-radius: 10px;
}
</style>
