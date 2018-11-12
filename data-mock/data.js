"use strict";

const data = {
  zombie: require('../data-mock/zombie.json'),
  location: require('../data-mock/location.json'),

  zombieIds: () =>
    new Set(data.zombie.map(({ id }) => Number(id))),

  locationNames: () =>
    new Map(data.location.map(({ name, id }) => [name.toLowerCase(), id])),

  locationIds: () =>
    new Set(data.location.map(({ id }) => Number(id))),

  nextZombieId: Math.max(...data.zombieIds) + 1,
  nextLocationId: Math.max(...data.locationIds) + 1,

  // TODO: internationalization
  // Will use ORM for sanitizing, this more a placeholder
  isValidName: input =>
    input.length && input.test(/^[a-z ]*$/y),

  isValidLocationName: loc =>
    data.locationNames.has(loc.toLowerCase),

  isValidLocationId: id =>
    data.locationIds.has(id),

  createZombie: ({ name, location, locationId }) => {
    const newId = locationId ||

      data.zombie.push({
        id: data.nextZombieId,
        name,
        locationId:
    })
  },
};

module.exports = data;
