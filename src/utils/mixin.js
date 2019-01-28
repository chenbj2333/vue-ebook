import { mapGetters, mapActions } from 'vuex';

export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuVisible', 'settingVisible', 'defaultFontSize'])
  },
  methods: {
    ...mapActions(['setMenuVisible', 'setFileName', 'setSettingVisible', 'setDefaultFontSize']),
    showSetting(key) {
      this.setSettingVisible(key);
    },
    setFontSize(fontSize) {
      this.setDefaultFontSize(fontSize);
      // this.setDefaultFontSize(fontSize).then(() => {
      //   this.switchTheme()
      //   Storage.saveFontSize(this.fileName, fontSize)
      // })
    }
  }
};
