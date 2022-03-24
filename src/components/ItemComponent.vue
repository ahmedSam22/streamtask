<template>
  <div class="main">
    <div class="main__image p-1">
      <img :src="src ? src : './assets.notfound.png'" alt="" />
    </div>
    <div class="main__body">
      <span> {{ name }} </span>
    </div>
    <div class="main__footer">
      <span> {{ id }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "itemComponent",
  data() {},
  methods: {},
  props: ["src", "name", "id"],
};
</script>

<style lang="scss" scoped>
.main {
  background: rgb(255 255 255 / 28%);
  border-radius: 10px;
  color: white;
  &__image {
    min-height: 188px;
    img {
      width: 50%;
    }
  }
}
</style>
