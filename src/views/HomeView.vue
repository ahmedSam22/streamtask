<template>
  <div class="home">
    <ul>
      <li v-for="test in info" :key="test.id" @click="logTest(test)">
        {{ test.category_id }} : {{ test.category_name }}
      </li>
    </ul>
    <hello-world :param="param" />
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  data() {
    return {
      info: null,
      param: null,
    };
  },
  components: { HelloWorld },
  mounted() {
    axios
      .get(
        "http://magic-tv.live:2095/player_api.php?username=hmaser&password=hmaserv1987&action=get_live_categories"
      )
      .then((response) => (this.info = response.data));
  },
  methods: {
    logTest(e) {
      this.param = e.category_id;
    },
  },
};
</script>
