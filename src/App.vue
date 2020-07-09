<template>
  <v-app>
    <Navbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

@Component({
  components: {
    Navbar,
    Footer
  }
})
export default class App extends Vue {}
</script>
