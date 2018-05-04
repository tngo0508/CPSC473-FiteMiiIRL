import Controller from '@ember/controller';
import {
  match,
  not
} from '@ember/object/computed';
import {
  gte
} from '@ember/object/computed';
import {
  and
} from '@ember/object/computed';

export default Controller.extend({
  headerMessage: 'Login',
  emailAddress: '',
  password: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("password.length", 6),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),
  // actions: {
  //   signIn() {
  //     this.get('session').open('firebase', {
  //       provider: 'password',
  //       email: this.get('emailAddress'),
  //       password: this.get('password')
  //     }).then(data => {
  //       console.log(data.currentUser);
  //     });
  //   },
  //   signOut() {
  //     this.get('session').close();
  //   }
  // }
});
