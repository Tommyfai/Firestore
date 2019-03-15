<template>
  <div class="about">
    <h1 class="b">This is an ABOUT page</h1>
    <O
      id="asdf"
      :style="{
        top: aTop + 'px',
        left: aLeft + 'px'
      }"
    />
    <O />
  </div>
</template>
<script>
// @ is an alias to /src

import O from "@/components/O.vue";

export default {
  name: "about",
  data() {
    return {
      aTop: 100,
      aLeft: 100
    };
  },
  created() {},
  methods: {},
  components: {
    O
  }
};
</script>
<style lang="scss" scoped>
.b {
  border: 1px solid red;
}
</style>
