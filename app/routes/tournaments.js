import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return [{
    //   id: 'Valve',
    //   title: 'Valve event',
    //   organizer: 'Veruca Salt',
    //   city: 'San Francisco',
    //   category: 'Counter Strike',
    //   attendee: 15,
    //   image:
    //   'https://upload.wikimedia.org/wikipedia/commons/4/42/Counter-Strike_CS_logo.svg',
    //   description: 'Counter-Strike (CS) is a series of multiplayer first-person shooter video games, in which teams of terrorists battle to perpetrate an act of terror (bombing, hostage-taking) and counter-terrorists try to prevent it (bomb defusal, hostage rescue)',
    // }, {
    //   id: 'Blizzcon',
    //   title: 'Blizzcon',
    //   organizer: 'Mike TV',
    //   city: 'Seattle',
    //   category: 'Dota 2',
    //   attendee: 1,
    //   image:
    //   'https://upload.wikimedia.org/wikipedia/commons/f/fe/DOTA-logo-wis.png',
    //   description: 'A commuters dream. This rental is within walking distance of 2 bus stops and the Metro.',
    // }, {
    //   id: 'Mario Land',
    //   title: 'Mario Land',
    //   organizer: 'Violet Beauregarde',
    //   city: 'Portland',
    //   category: 'Overwatch',
    //   attendee: 3,
    //   image:
    //   'https://upload.wikimedia.org/wikipedia/commons/5/55/Overwatch_circle_logo.svg',
    //   description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    // }];
    return this.store.findAll('tournament')
  }
});
