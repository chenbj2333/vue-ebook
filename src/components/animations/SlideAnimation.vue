<template>
  <transition :name="slideStyle">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'SlideAinimation',
  props: {
    slideStyle: String
  }
};
</script>

<style lang="scss" scoped>
  .slide-up-enter, .slide-up-leave-to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  .slide-up-enter-active, .slide-up-leave-active {
    transition: all .5s ease-in-out;
  }
  .slide-up-enter-to, .slide-up-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .slide-down-enter, .slide-down-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  .slide-down-enter-active, .slide-down-leave-active {
    transition: all .5s ease-in-out;
  }
  .slide-down-enter-to, .slide-down-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
</style>
