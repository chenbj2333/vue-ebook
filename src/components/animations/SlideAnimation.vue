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
  .popup-slide-up-enter, .popup-slide-up-leave-to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  .popup-slide-up-enter-active, .popup-slide-up-leave-active {
    transition: all .5s ease-in-out;
  }
  .popup-slide-up-enter-to, .popup-slide-up-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  .popup-slide-down-enter, .popup-slide-down-leave-to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  .popup-slide-down-enter-active, .popup-slide-down-leave-active {
    transition: all .5s ease-in-out;
  }
  .popup-slide-down-enter-to, .popup-slide-down-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
</style>
