import FirebaseSerializer from 'emberfire/serializers/firebase';
export default FirebaseSerializer.extend({
  attrs: {
    people: { embedded: 'always' },
    metaData: { embedded: 'always' }
  }
});
