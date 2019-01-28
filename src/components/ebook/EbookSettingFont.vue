<template>
  <transition name="setting-slide">
    <div class="setting-wrapper" v-show="menuVisible && settingVisible === 0">
      <div class="setting-font-size">
        <div class="preview" ref="left">
          <span :style="styleLeft" ref="leftText">A</span>
        </div>
        <div class="select">
          <div class="select-wrapper" v-for="item in fontSizeList" :key="item.id"
            @click="setFontSize(item.fontSize)" ref="item">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize === item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview" ref="right">
          <span :style="styleRight" ref="rightText">A</span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ebookMixin } from '../../utils/mixin.js';
import { FONT_SIZE_LIST, FONT_FAMILY } from '../../utils/book.js';

export default {
  data() {
    return {
      fontSizeList: FONT_SIZE_LIST,
      fontFamily: FONT_FAMILY,
      styleLeft: {},
      styleRight: {}
    };
  },
  mixins: [ ebookMixin ],
  watch: {
    settingVisible(v) {
      if (v === 0) {
        this.$nextTick(() => {
          this.genStyle();
        });
      }
    }
  },
  methods: {
    genStyle() {
      const left = this.$refs.left.getBoundingClientRect().width;
      const right = this.$refs.left.getBoundingClientRect().width;
      const leftText = this.$refs.leftText.getBoundingClientRect().width;
      const rightText = this.$refs.leftText.getBoundingClientRect().width;
      const item = this.$refs.item[0].getBoundingClientRect().width;
      this.styleLeft = {
        marginLeft: (left + item - leftText) / 2 + 'px',
        fontSize: this.fontSizeList[0].fontSize + 'px'
      };
      this.styleRight = {
        marginRight: (right + item - rightText) / 2 + 'px',
        fontSize: this.fontSizeList[this.fontSizeList.length - 1].fontSize + 'px'
      };
    }
  }
};
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/global.scss";
  .setting-wrapper {
    position: absolute;
    bottom: px2rem(48);
    left: 0;
    z-index: 1;
    width: 100%;
    height: px2rem(90);
    box-shadow: 0 px2rem(-5) px2rem(5) rgba(0, 0, 0, .15);
    font-size: px2rem(22);
    display: flex;
    flex-direction: column;
    /* need delete */
    background: #fff;
    /* end */

    &.setting-slide-enter, &.setting-slide-leave-to {
      transform: translate3d(0, px2rem(90), 0);
    }
    &.setting-slide-enter-active, &.setting-slide-leave-active {
      transition: all .3s linear;
    }
    &.setting-slide-enter-to, &.setting-slide-leave {
      transform: translate3d(0, 0, 0);
    }

    .setting-font-size {
      flex: 2;
      display: flex;
      height: 100%;
      .preview {
        flex: 0 0 px2rem(40);
        @include center;
      }
      .select {
        display: flex;
        flex: 1;
        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          &:first-child {
            .line {
              /* need delete */
              border-top: 1px solid #acadaf!important;
              /* end */
              &:first-child {
                border-top: none;
              }
            }
          }
          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }
          .line {
            /* need delete */
            border-top: 1px solid #acadaf!important;
            /* end */
            flex: 1;
            height: 0;
          }
          .point-wrapper {
            /* need delete */
            border-left: 1px solid #acadaf!important;
            /* end */
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: px2rem(7);
            .point {
              /* need delete */
              background: #cecece!important;
              border: 1px solid #ccc!important;
              /* end */
              position: absolute;
              top: px2rem(-8);
              left: px2rem(-10);
              width: px2rem(20);
              height: px2rem(20);
              border-radius: 50%;
              box-shadow: 0 px2rem(4) px2rem(4) rgba(0, 0, 0, .15);
              @include center;
              .small-point {
                /* need delete */
                background: #5d6268!important;
                /* end */
                width: px2rem(5);
                height: px2rem(5);
                border-radius: 50%;
              }
            }
          }
        }
      }
    }
  }
</style>
