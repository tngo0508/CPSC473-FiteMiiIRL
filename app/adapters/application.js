import FirebaseAdapter from 'emberfire/adapters/firebase';
import {inject} from '@ember/service'

export default FirebaseAdapter.extend({
  firebase: inject.service()
});
