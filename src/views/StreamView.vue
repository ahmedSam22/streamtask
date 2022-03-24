<template>
  <div class="stream">
    <item-component />
  </div>
</template>

<script>
import axios from "axios";
import itemComponent from "@/components/ItemComponent.vue";

export default {
  data() {
    return {
      info: null,
      // param: $store.state.param,
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
};
</script>
