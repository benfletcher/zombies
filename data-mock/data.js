"use strict";

const data = {
  zombie: require('../data-mock/zombie.json'),
  location: require('../data-mock/location.json'),

  locationNames: () =>
    new Set(data.location.map(({ name }) => name.toLowerCase())),

  locationIds: () =>
    new Set(data.location.map(({ id }) => Number(id))),

  lastZombieId: 0,
  lastLocationId: 0,

  // TODO: internationalization
  // Will use ORM for sanitizing, this more a placeholder
  isValidName: input =>
    input.length && input.test(/^[a-z ]*$/y),

  isValidLocationName: loc =>
    data.locationNames.has(loc.toLowerCase),

  isValidLocationId: id =>
    data.locationIds.has(id),

  createZombie: ({ name, location, locationId }) => 0,
};

module.exports = data;
