import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tournaments', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tournaments');
    assert.ok(route);
  });
});
