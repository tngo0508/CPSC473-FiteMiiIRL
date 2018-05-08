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
      this.controller.set('registerInProgress', true)
      this.controller.set('isDisabled', true)

      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        this.controller.set('responseMessage', `You have succesfully created a new account with the following uid:` + userResponse.uid + `. Your account is signed in automatically. Please click on My Tournament for the next step`);
        this.controller.set('responseError', '')
        this.controller.set('emailAddress', '')
        this.controller.set('password', '')
        this.controller.set('confirmedPassword', '')
        this.controller.set('registerInProgress', false)
        this.controller.set('isDisabled', false)
        // this.transitionTo('login');
      }, (error) => {
        if (error) {
          this.controller.set('responseError', error);
          this.controller.set('responseMessage', '');
        }
      });
    }
  }
});
