<template>
  <nav color="grey lighten-3">
    <v-app-bar flat clipped-left light color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <div class="pointer" @click="goHomeLink">
        <span class="font-weight subheading">Project</span>
        <span class="subheading">D&D</span>
      </div>
      <v-tabs right class="hidden-sm-and-down">
        <v-tab v-for="link in links" :key="link.text" :to="link.route" exact>{{ link.text }}</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-divider vertical inset></v-divider>
      <v-btn text class="mr-3">Вход</v-btn>
      <v-btn>Регистрация</v-btn>
    </v-app-bar>
    <v-navigation-drawer disable-resize-watcher temporary app v-model="drawer">
      <v-toolbar-title class="text-uppercase mt-5 ml-5">
        <span class="font-weight-light subheading">Project</span>
        <span class="subheading">D&D</span>
      </v-toolbar-title>
      <v-list dense>
        <v-list-item :to="link.route" link v-for="link in links" :key="link.text">
          <v-list-item-icon
            ><v-icon>{{ link.icon }}</v-icon></v-list-item-icon
          >
          <v-list-item-content>{{ link.text }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  drawer = false;
  links = [
    { icon: "", text: "Главная", route: "/" },
    { icon: "", text: "Мероприятия", route: "events" }
    // { icon: "", text: "Сообщество", route: "/forum" },
    // { icon: "", text: "Материалы", route: "/guides" }
  ];

  goHomeLink() {
    this.$router.push("/");
  }
}
</script>
