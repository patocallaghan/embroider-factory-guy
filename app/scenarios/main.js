// file: app/scenarios/main.js
import { Scenario } from 'ember-data-factory-guy';
import Users from './users';

// Just for fun, set the log level ( to 1 ) and see all FactoryGuy response info in console
Scenario.settings({
  logLevel: 1, // 1 is the max for now, default is 0
});

export default class extends Scenario {
  run() {
    this.include([Users]); // include other scenarios
    // this.mockFindAll('products', 3); // mock some finds
    this.mock({
      type: 'POST',
      url: '/api/v1/users/sign_in',
      responseText: { token: '0123456789-ab' },
    }); // mock a custom endpoint
  }
}
