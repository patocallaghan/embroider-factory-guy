// file: app/scenarios/users.js
import { Scenario } from 'ember-data-factory-guy';

export default class extends Scenario {
  run() {
    this.mockFindAll('user', 'admin');
    this.mockDelete('user');
  }
}
