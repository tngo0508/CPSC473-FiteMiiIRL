import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  organizer: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  attendee: DS.attr(),
  description: DS.attr()
});
