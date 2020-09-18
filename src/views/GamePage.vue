<template>
  <v-container>
    <v-card outlined class="mt-5" color="grey lighten-3">
      <v-img src="@/assets/img/dndlogo.jpg" height="300px"></v-img>
      <v-row>
        <v-col>
          <v-card-subtitle class="pb-0">Время проведения игры</v-card-subtitle>
          <v-card-title class="pt-0">Dungeon&Dragons</v-card-title>
        </v-col>
        <v-col align-self="center">
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn outlined>Присоединиться</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col cols="8">
        <v-card outlined color="grey lighten-3">
          <v-container>
            <v-row>
              <v-col cols="3" class="ml-2"><h3>Участники: 2/10</h3></v-col>
              <v-col
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, exercitationem
                dicta? Dicta soluta laborum eaque tempore dolorum cumque veniam omnis iure
                similique! Incidunt officiis numquam ea laudantium veritatis possimus
                voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                exercitationem dicta? Dicta soluta laborum eaque tempore dolorum cumque veniam omnis
                iure similique! Incidunt officiis numquam ea laudantium veritatis possimus
                voluptatem.</v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card outlined color="grey lighten-3">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Организатор</v-list-item-title>
              <v-list-item-subtitle
                ><v-avatar>
                  <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" /> </v-avatar
                ><span class="ml-5">Имя Фамилия</span></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Каждый день</v-list-item-title>
              <v-list-item-subtitle>19:00 МСК_1</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Онлайн</v-list-item-title>
              <v-list-item-subtitle>https://roll20.net</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Стоимость</v-list-item-title>
              <v-list-item-subtitle>Бесплатно</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="8">
        <v-card outlined color="grey lighten-3">
          <v-container>
            <v-row>
              <v-col cols="3" class="ml-2"><h3>Описание</h3></v-col>
              <v-col
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, exercitationem
                dicta? Dicta soluta laborum eaque tempore dolorum cumque veniam omnis iure
                similique! Incidunt officiis numquam ea laudantium veritatis possimus
                voluptatem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
                exercitationem dicta? Dicta soluta laborum eaque tempore dolorum cumque veniam omnis
                iure similique! Incidunt officiis numquam ea laudantium veritatis possimus
                voluptatem.</v-col
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
