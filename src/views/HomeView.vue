<template>
  <div class="home d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-6 p-lg-5 p-sm-1" v-for="item in info" :key="item.id">
          <router-link @click="getId(item)" to="/stream">
            <div class="category">
              <span>{{ item.category_name }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      info: null,
    };
  },
  components: {},
  mounted() {
    axios
      .get(
        "http://magic-tv.live:2095/player_api.php?username=hmaser&password=hmaserv1987&action=get_live_categories"
      )
      .then((response) => (this.info = response.data));
  },
  methods: {
    getId(e) {
      return this.$store.getters.getId(e.category_id);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
.home {
  height: 100vh;
}
.category {
  background: rgba(227, 227, 227, 0.5);
  padding: 20px;
  border-radius: 10px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
  &:hover {
    background: rgba(227, 227, 227, 0.9);
  }
}
a {
  color: #f7f7f7;
  text-decoration: none;
  font-size: 2em;
  &:hover {
    color: #42b983;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 1em;
  }
}
</style>
