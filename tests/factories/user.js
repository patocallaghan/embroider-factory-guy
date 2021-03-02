import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('user', {
  default: {
    style: 'normal',
    name: 'Dude',
  },
  traits: {
    admin: {
      style: 'super',
      name: 'Admin',
    },
  },
});
