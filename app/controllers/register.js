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
import {computed} from '@ember/object'

export default Controller.extend({
  headerMessage: 'Register',
  emailAddress: '',
  password: '',
  confirmedPassword: '',
  responseMessage: '',
  responseError: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough1: gte("password.length", 6),
  isLongEnough2: gte("confirmedPassword.length", 6),
  isMatch: computed(('password', 'confirmedPassword'), function() {
    return this.get('password') == this.get('confirmedPassword')
  }),
  isConditionTrue: and('isValid', 'isLongEnough1', 'isLongEnough2', 'isMatch'),
  isDisabled: not('isConditionTrue')
});
