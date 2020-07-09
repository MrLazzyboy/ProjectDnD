<template>
  <v-card color="grey lighten-3" outlined class="newspost">
    <v-card-title>
      <v-chip outlined>Обсуждения</v-chip>
    </v-card-title>
    <v-card-title>
      Какая-то новость с форума, которая наверняка интересна пользователям
    </v-card-title>
    <v-card-text>
      <v-btn depressed small color="grey lighten-2">Перейти</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.newspost {
  min-height: 200px;
  .v-card__title {
    word-break: unset;
  }
}
</style>
