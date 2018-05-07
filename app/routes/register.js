import Route from '@ember/routing/route';
import {
  inject
} from '@ember/service'
// import firebase from '@ember';

export default Route.extend({
  firebaseApp: inject(),

  setupController(controller) {
    controller.set('responseMessage', '');
    controller.set('responseError', '');
    controller.set('emailAddress', '');
    controller.set('password', '');
    controller.set('confirmedPassword', '');
  },
  actions: {
    signUp() {
      const auth = this.get('firebaseApp').auth();
      const email = this.controller.get('emailAddress');
      const password = this.controller.get('password');
      // const confirmedPassword = this.controller.get('confirmedPassword');

      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        // const user = this.store.createRecord('register', {
        //   // id: userResponse.uid,
        //   email: userResponse.email,
        // });
        // user.save();
        this.controller.set('responseMessage', `You have succesfully create a new account with the following uid:` + userResponse.uid);
        this.controller.set('responseError', '');
        this.transitionTo('login');
      }, (error) => {
        if (error) {
          this.controller.set('responseError', error);
          this.controller.set('responseMessage', '');
        }
      });
    }
  }
});
