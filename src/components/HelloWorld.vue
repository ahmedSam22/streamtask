<template>
  <div class="container">
    {{ param }}
    <button class="btn-success" @click="testt()">test</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    param: String,
  },
  data() {
    return {
      test: this.param,
    };
  },
  methods: {
    testt() {
      console.log(this.param);
    },
    // filter() {
    //   var result = jsonObject.filter((obj) => obj.studentName == this.param);
    //   console.log(result);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
