import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tournamentpage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tournamentpage');
    assert.ok(route);
  });
});
