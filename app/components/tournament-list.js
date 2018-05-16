import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  buttonLabeled: "Attend Event",
  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    },
    buttonClickedv2(param) {
      this.sendAction('action', param);

    }

  }
});
