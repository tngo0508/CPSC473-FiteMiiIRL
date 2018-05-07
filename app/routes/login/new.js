import Route from '@ember/routing/route';
import {
  inject
} from '@ember/service'

export default Route.extend({
  session: inject(),
  model() {
    return this.store.createRecord('tournament', {
      organizer: this.get('session').get('currentUser').email
    });
  },

  actions: {

    saveTournament(newTournament) {
      newTournament.save().then(() => this.transitionTo('login'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
