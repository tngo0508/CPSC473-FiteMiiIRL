import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tournaments');
  this.route('attend');

  this.route('login', function() {

    this.route('new');
    this.route('edit', { path: '/:tournament_id/edit' });
  });

  this.route('register');
  this.route('about');
  this.route('contact');
  this.route('tournamentpage',function(){
    this.route('tournamentpage',{path: '/:tournament_id'});
  });
});

export default Router;
