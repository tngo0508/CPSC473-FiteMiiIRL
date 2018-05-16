import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
  maps: service(),



  model(params){
    return this.store.findRecord('tournament', params.tournament_id);
  }
<<<<<<< HEAD


=======
>>>>>>> caea6e1949c72f1d14d4ec1ba6e794c5699908ac
});
