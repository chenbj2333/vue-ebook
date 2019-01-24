<template>
  <div id="read">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Epub from 'epubjs'

global.ePub = Epub

export default {
  computed: {
    ...mapGetters(['fileName'])
  },
  methods: {
    initEpub() {
      const baseUrl = 'http://127.0.0.1:9000/epub/'
      const url = `${baseUrl}${this.fileName}.epub`
      this.book = new Epub(url)
      this.book.renderTo('read', {
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      }).display()
    }
  },
  mounted() {
    const fileName = this.$route.params.fileName.split('|').join('/')
    this.$store.dispatch('setFileName', fileName).then(() => {
      this.initEpub()
    })
  }
}
</script>

<style scoped>

</style>
