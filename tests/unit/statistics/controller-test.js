import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Controller | statistics', function(hooks) {
  setupTest(hooks)

  test('exists', function(assert) {
    let controller = this.owner.lookup('controller:statistics')
    assert.ok(controller)
  })
})
