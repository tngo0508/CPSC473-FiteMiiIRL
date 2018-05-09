import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('tournament', params.tournament_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit tournament');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('login/form');
  },

  actions: {

    saveTournament(tournament) {
      // tournament.save().then(() => this.transitionTo('login'));
      tournament.save().then(() => {
        this.transitionTo('login').then(() =>         window.location.reload(true));
      })
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
