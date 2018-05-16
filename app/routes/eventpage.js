import Route from '@ember/routing/route';

export default Route.extend({
  model(tid) {
    return this.store.find('tournament', tid.tournament_id);
  }

});
