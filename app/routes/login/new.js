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

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new tournament');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('login/form');
  },

  actions: {

    saveTournament(newTournament) {
      // newTournament.save().then(() => this.transitionTo('login'));

      newTournament.save().then(() => {
        this.transitionTo('login').then(() =>         window.location.reload(true));
      })
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      // this.controller.get('model').rollbackAttributes();
      let model = this.controller.get('model');

      if (model.get('isNew')) {
        model.destroyRecord();
      }
    }
  }
});
