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
  responseError: '',

  loginInProgress: false,

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("password.length", 6),
  isBothTrue: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothTrue'),
});
