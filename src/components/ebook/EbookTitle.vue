<template>
  <slide-ainimation slideStyle="popup-slide-up">
    <div class="title-wrapper" v-show="menuVisible">
      <div class="left" @click="back">
        <span class="icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </slide-ainimation>
</template>

<script>
import { ebookMixin } from '../../utils/mixin.js';
import SlideAinimation from '../animations/SlideAnimation';

export default {
  components: {
    SlideAinimation
  },
  mixins: [ ebookMixin ],
  methods: {
    back() {
      console.log('back');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";
  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(5) px2rem(5) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    display: flex;

    .left {
      flex: 0 0 px2rem(37);
      @include right;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      .icon-wrapper {
        flex: 0 0 px2rem(37);
        @include left;
      }
    }
  }
</style>
