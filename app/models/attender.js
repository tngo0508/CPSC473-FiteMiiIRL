import DS from 'ember-data';

export default DS.Model.extend({
  //following line would be relating this Model
  //to tournament model
  tournament:DS.belongsTo('tournament'),
  fullname: DS.attr('string')
});
