import Route from '@ember/routing/route';
import {
  inject
} from '@ember/service'

export default Route.extend({
  session: inject(),
  // model() {
  //   return this.store.findAll('tournament');
  // }
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  model() {
    let email = '';
    if (this.get('session').get('currentUser')) {
      email = this.get('session').get('currentUser').email;
    }
    return this.store.query('tournament', {
      orderBy: 'organizer',
      equalTo: email
    });
  }
});
