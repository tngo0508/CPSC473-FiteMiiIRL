import Route from '@ember/routing/route';

export default Route.extend({

  actions: {

    saveAttender(Tournament){
      let email = '';
      if (this.get('session').get('currentUser')) {
        email = this.get('session').get('currentUser').email;
      }
      var newCompetitor = this.store.createRecord('competitor',{
        body: email
      });

        Tournament.get('people').pushObject(newCompetitor);
        Tournament.update();
    }


  }
});
