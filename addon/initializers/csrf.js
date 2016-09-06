import Service from '../service';

export default {
  name: 'csrf',
  initialize: function(app) {
    let App = arguments[1] || app;
    App.register('service:rails-csrf', Service);
    App.inject('route',      'csrf', 'service:rails-csrf');
    App.inject('controller', 'csrf', 'service:rails-csrf');
  }
};
