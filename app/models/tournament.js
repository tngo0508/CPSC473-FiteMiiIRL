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

  isTitleValid: notEmpty('title'),
  isCityValid: notEmpty('city'),
  isCategoryValid: notEmpty('category'),
  isImageValid: notEmpty('image'),
  isAttendeeValid: notEmpty('attendee'),
  isDescriptionValid: notEmpty('description')
});
