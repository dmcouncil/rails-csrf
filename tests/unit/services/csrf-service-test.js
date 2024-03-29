import { module, skip } from 'qunit';
import { setupTest } from 'dummy/tests/helpers';

module('Unit | Service | csrf-service', function (hooks) {
  setupTest(hooks);

  // No tests can be written here as it depends on the meta tag of a webpage
  skip('it exists', function (assert) {
    let service = this.owner.lookup('service:csrf-service');
    assert.ok(service);
  });
});
