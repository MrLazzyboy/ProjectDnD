<template>
  <v-container>
    <v-card outlined class="mt-5 mb-5" color="grey lighten-3">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field outlined label="Названия мероприятия"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-select
                :items="['DnD 5e', 'World of Darkness', 'Pathfinder', 'Starfinder']"
                label="Выбор вселенной"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="['онлайн', 'офлайн']" label="Тип игры" outlined></v-select>
            </v-col>
            <v-col cols="12">
              <v-select
                :items="['Roll20', 'Fantasy Grounds', 'Другое']"
                label="Выбор способа проведения"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="6">
              <input type="date" name="" id="" />
            </v-col>
            <v-col cols="6">
              <input type="time" name="" id="" />
            </v-col>
            <v-col cols="6">
              <v-text-field outlined label="Количество партий" placeholder="5-10"></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined label="Количество игроков" placeholder="5-10"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea no-resize outlined label="Описание игры"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-textarea no-resize outlined label="Пожелания мастера"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-combobox
                :items="['Для новичков', 'Долгая кампания', 'Ваншот', 'Для опытных игроков']"
                label="Добавление хэштегов"
                multiple
                outlined
                dense
                clearable
                hide-selected
              ></v-combobox>
            </v-col>
            <v-col cols="6">
              <v-file-input label="File input" outlined dense></v-file-input>
            </v-col>
            <v-col cols="6">
              <v-file-input label="Добавление вложений" outlined dense></v-file-input>
            </v-col>
            <!-- <v-col cols="8"></v-col> -->
            <v-col width="100%" offset="8" cols="4">
              <v-btn large depressed color="grey lighten-2">Создать</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class CreateHomePage extends Vue {}
</script>
