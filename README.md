# rails-csrf

ember-cli addon to keep track of your Rails CSRF-token.


## Compatibility

* Ember.js v4.8 or above
* Ember CLI v4.8 or above
* Node.js v18 or above


## Installation

```
ember install rails-csrf
```


## Usage

In your app/adapters/application.js (make one if you don't have one)
```js
@service csrfService;

// This makes sure that every single API request Ember makes passes in the CSRF token
get headers() {
  return {
    'X-CSRF-Token': this.csrfService.csrfToken
  };
}
```

In your app/routes/application.js
```js
@service csrfService;

async beforeModel() {
  return this.csrfService.fetchToken();
},
```

If you use Pretender and want to mock CSRF in your specs, in tests/helpers/index.js
```js
import mockCsrf from 'rails-csrf/utils/mock-csrf-pretender';

hooks.beforeEach(function () {
  this.pretender = new Pretender();
  mockCsrf(this.pretender);
});
```


## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.


## License

This project is licensed under the [MIT License](LICENSE.md).
