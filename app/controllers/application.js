import Controller from '@ember/controller';
import { make } from 'ember-data-factory-guy';

export default class ApplicationController extends Controller {
  async init() {
    super.init(...arguments);
    let user = make('user');
    console.log(user.serialize());
    let users = await this.store.findAll('user');
    console.log(users.map((u) => u.serialize()));
  }
}
