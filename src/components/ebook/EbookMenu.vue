<template>
  <slide-ainimation slideStyle="slide-down">
    <div class="menu-wrapper" v-show="menuVisible">
      <div class="icon-wrapper">
        <span class="icon-menu"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-progress"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-bright"></span>
      </div>
      <div class="icon-wrapper">
        <span class="icon-A"></span>
      </div>
    </div>
  </slide-ainimation>
</template>

<script>
import { mapGetters } from 'vuex';
import SlideAinimation from '../animations/SlideAnimation';

export default {
  components: {
    SlideAinimation
  },
  computed: {
    ...mapGetters(['menuVisible'])
  },
  methods: {
    back() {
      console.log('back');
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    display: flex;

    .icon-wrapper {
      flex: 1;
      @include center;
      .icon-progress {
        font-size: px2rem(24);
      }
      .icon-A {
        font-size: px2rem(20);
      }
    }
  }
</style>
