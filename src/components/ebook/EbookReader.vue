<template>
  <div class="ebook-reader">
    <div class="read-wrapper">
      <div id="read"></div>
    </div>
  </div>
</template>

<script>
import { ebookMixin } from '../../utils/mixin.js';
import Epub from 'epubjs';

global.ePub = Epub;

export default {
  mixins: [ ebookMixin ],
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
      }
      if (this.menuVisible) {
        this.hideMenuAndTitle();
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
      }
      if (this.menuVisible) {
        this.hideMenuAndTitle();
      }
    },
    toggleMenuAndTitle() {
      this.setMenuVisible(!this.menuVisible);
    },
    hideMenuAndTitle() {
      this.setMenuVisible(false);
    },
    initGuest() {
      this.rendition.on('touchstart', event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on('touchend', event => {
        this.touchEndX = event.changedTouches[0].clientX;
        this.touchEndTime = event.timeStamp;
        const offsetX = this.touchEndX - this.touchStartX;
        const time = this.touchEndTime - this.touchStartTime;
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          this.nextPage();
        } else {
          this.toggleMenuAndTitle();
        }
        event.preventDefault();
        event.stopPropagation();
      });
    },
    initEpub() {
      const baseUrl = 'http://192.168.0.101:9000/epub/';
      const url = `${baseUrl}${this.fileName}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      });

      this.rendition.display();
      this.initGuest();
    }
  },
  mounted() {
    // const fileName = this.$route.params.fileName.split('|').join('/')
    const fileName = 'History/2013_Book_FungalDiseaseInBritainAndTheUn';
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initEpub();
    });
  }
};
</script>

<style scoped>

</style>
