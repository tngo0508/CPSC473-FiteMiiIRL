import DS from 'ember-data';
import { notEmpty } from '@ember/object/computed';

export default DS.Model.extend({
  title: DS.attr('string'),
  organizer: DS.attr('string'),
  city: DS.attr('string'),
  category: DS.attr('string'),
  image: DS.attr('string'),
  attendee: DS.attr('number'),
  description: DS.attr('string'),
  people: DS.hasMany('competitor',{async: false}),
  // metaData: DS.belongsTo('tournament', { async: false }),
  //people: DS.hasMany('attender'),
  //could also be a way at doing it



  isTitleValid: notEmpty('title'),
  isCityValid: notEmpty('city'),
  isCategoryValid: notEmpty('category'),
  isImageValid: notEmpty('image'),
  isAttendeeValid: notEmpty('attendee'),
  isDescriptionValid: notEmpty('description')
});
