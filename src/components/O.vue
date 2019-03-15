<template>
  <div
    class="O"
    v-on:click="oClick();"
    :style="{
      width: Width + 'px',
      height: Height + 'px',
      'font-size': FontSize + 'px'
    }"
  >
    <span>{{ Msg }}</span>
  </div>
</template>

<script>
export default {
  name: "O",
  data() {
    return {
      Msg: "O O O O O O O O O O O O O O O O",
      FontSize: 15,
      Width: 150,
      Height: 150
    };
  },
  methods: {
    oClick: function() {
      this.Height = 200;
      this.Msg = "Y";
      this.FontSize = 150;
    }
  }
};
</script>

<style scoped lang="scss">
@import "../assets/css/_function.scss";
div {
  position: relative;
  &.O {
    @include border-radius(50%);
    @include transition();
    cursor: pointer;
    position: absolute;
    display: inline-block;
    background: #ffcc00;
    overflow: hidden;
    span {
      @include float(middleCenter);
    }
  }
}
</style>
