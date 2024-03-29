import mockCsrf from 'dummy/utils/mock-csrf-pretender';
import { module, test } from 'qunit';

module('Unit | Utility | mock-csrf-pretender', function () {
  test('it sets up the pretender for CSRF calls', function (assert) {
    assert.expect(3);

    class TestObject {
      get(url, callback) {
        assert.strictEqual(url, '/api/csrf');

        let result = callback();
        assert.strictEqual(result[0], 200);
        assert.strictEqual(result[2], '{"authenticity_token":"token"}');
      }
    }

    mockCsrf(new TestObject());
  });
});
