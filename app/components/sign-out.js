import Component from '@ember/component';
import {
  inject
} from '@ember/service'

export default Component.extend({
  session: inject(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    signOut() {
      this.get('session').close();
    }
  }
});
