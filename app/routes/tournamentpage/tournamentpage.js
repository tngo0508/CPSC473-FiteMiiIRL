import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';
// import {computed} from '@ember/object';

export default Route.extend({
  maps: service(),

  model(params){
    return this.store.findRecord('tournament', params.tournament_id);
  }



});
