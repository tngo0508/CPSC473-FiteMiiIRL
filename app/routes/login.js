import Route from '@ember/routing/route';
import {
  inject
} from '@ember/service'

export default Route.extend({
  setupController(controller) {
    controller.set('responseError', '');
    controller.set('emailAddress', '');
    controller.set('password', '');
  },
  session: inject(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },
  actions: {
    signIn() {
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.controller.get('emailAddress'),
        password: this.controller.get('password')
      }).catch((error) => {
        this.controller.set('responseError', error.message);
      }).then(() => {
        this.controller.set('responseError', '');
        this.controller.set('emailAddress', '');
        this.controller.set('password', '');
        this.refresh()
      });
      // }). then(data => {
      //   console.log(data.currentUser);
      // });
    },
    signOut() {
      this.controller.set('responseError', '');
      this.controller.set('emailAddress', '');
      this.controller.set('password', '');
      this.get('session').close().then(() => {
        this.refresh()
      });
    }
  }
});
