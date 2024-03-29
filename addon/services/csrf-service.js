import Service from '@ember/service';
import { isEmpty } from '@ember/utils';
import fetch from 'fetch';

export default class CsrfService extends Service {
  fetchToken() {
    // See if the token is already in the meta tag:
    // - if so (we are in Rails/3000), simply set it to this class.
    // - if not (we are in 4200), fetch it from Rails and set it after it returns.
    let token = $('meta[name="csrf-token"]').attr('content');
    if (!isEmpty(token)) {
      this.csrfToken = token;
    }
    else {
      fetch('/api/csrf').then((response) => {
        response.json().then((json) => {
          this.csrfToken = json.authenticity_token;
        });
      })
    }
  }
}
