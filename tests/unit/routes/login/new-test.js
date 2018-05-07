import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | login/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:login/new');
    assert.ok(route);
  });
});
