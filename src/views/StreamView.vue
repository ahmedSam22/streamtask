<template>
  <div class="stream container">
    <div class="d-flex">
      <button class="btn btn-outline-warning" @click="back()">back</button>
    </div>

    <div class="row justify-content-between">
      <item-component
        class="col col-sm-12"
        v-for="item in info"
        :key="item.id"
        :src="item.stream_icon || '../assets/notfound.png'"
        :name="item.name"
        :id="item.stream_id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import itemComponent from "@/components/ItemComponent.vue";

export default {
  data() {
    return {
      info: null,
    };
  },
  components: { itemComponent },
  computed: {
    param() {
      return this.$store.state.cat_id;
    },
  },
  mounted() {
    axios
      .get(
        "http://magic-tv.live:2095/player_api.php?username=hmaser&password=hmaserv1987&action=get_live_streams"
      )
      .then(
        (response) =>
          (this.info = response.data.filter(
            (el) => el.category_id == this.param
          ))
      );
  },
  methods: {
    back() {
      history.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.col {
  max-width: 30%;
  flex: 1 0 30%;
  margin: 10px;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex: 1 0 60%;
  }
}
</style>
