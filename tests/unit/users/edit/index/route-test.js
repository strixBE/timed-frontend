import { module, test } from 'qunit'
import { setupTest } from 'ember-qunit'

module('Unit | Route | users/edit/index', function(hooks) {
  setupTest(hooks)

  test('exists', function(assert) {
    let route = this.owner.lookup('route:users/edit/index')
    assert.ok(route)
  })
})
