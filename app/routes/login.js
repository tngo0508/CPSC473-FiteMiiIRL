import Route from '@ember/routing/route';
import {inject} from '@ember/service'

export default Route.extend({
  session: inject,
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.controller.get('emailAddress'),
        password: this.controller.get('password')
      }). then(data => {
        console.log(data.currentUser);
      });
    },
    signOut() {
      this.get('session').close();
    }
  }
});
