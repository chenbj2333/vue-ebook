<template>
  <div>
    <slide-ainimation slideStyle="popup-slide-down">
      <div class="menu-wrapper" v-show="menuVisible" :class="{'hide-box-shadow': settingVisible >= 0}">
        <div class="icon-wrapper">
          <span class="icon-menu"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright"></span>
        </div>
        <div class="icon-wrapper" @click="showSetting(0)">
          <span class="icon-A"></span>
        </div>
      </div>
    </slide-ainimation>
    <ebook-setting-font></ebook-setting-font>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin.js';
import SlideAinimation from '../animations/SlideAnimation';
import EbookSettingFont from './EbookSettingFont';

export default {
  components: {
    SlideAinimation,
    EbookSettingFont
  },
  mixins: [ ebookMixin ]
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";
  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: px2rem(48);
    box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    display: flex;
    background: #fff;

    &.hide-box-shadow {
      box-shadow: none;
    }

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
