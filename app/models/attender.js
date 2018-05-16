import DS from 'ember-data';

export default DS.Model.extend({
  //following line would be relating this Model
  //to tournament model
  fullname: DS.attr('string'),
  tournament:DS.belongsTo('tournament')
});
