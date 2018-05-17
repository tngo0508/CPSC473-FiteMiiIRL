import Route from '@ember/routing/route';
import {
  inject
} from '@ember/service'

export default Route.extend({
  session: inject(),
  beforeModel() {
    this.replaceWith('index');
    return this.get('session').fetch().catch(function() {});
  }

});
