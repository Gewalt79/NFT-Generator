const COMMON_MAX_RARITY = 50; //Starts from 1
const UNCOMMON_MAX_RARITY = 75;
const RARE_MAX_RARITY = 95;
const LEGENDARY_MAX_RARITY = 100;

const randomElement = (list) => {
  const _random = Math.floor(Math.random() * list.length);
  return list[_random];
};

const getBackground = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1', '2']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['3', '4']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['5']);
  }
};

const getVerybig = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['1']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['2', '3']);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(['4', '5']);
  }
};

const getBig = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1', '2']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['3']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['4']);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(['5']);
  }
};

const getMedium = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['2', '3']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['4']);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(['5']);
  }
};

const getSmall = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1', '2']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['3']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['4']);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(['5']);
  }
};

const getVerySmall = () => {
  const _random = Math.floor(Math.random() * LEGENDARY_MAX_RARITY);

  if (_random < COMMON_MAX_RARITY) {
    return randomElement(['1', '2']);
  } else if (_random < UNCOMMON_MAX_RARITY) {
    return randomElement(['3']);
  } else if (_random < RARE_MAX_RARITY) {
    return randomElement(['4']);
  } else if (_random < LEGENDARY_MAX_RARITY) {
    return randomElement(['5']);
  }
};

module.exports = {
  getBackground,
  getVerybig,
  getBig,
  getMedium,
  getSmall,
  getVerySmall,
};
