require('dotenv').config(".env");
const Jimp = require('jimp');
const fs = require('fs');
const pinataSDK = require('@pinata/sdk');
const pinata = pinataSDK("*", "*");
const Traits = require('./Traits');

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const build = async (index, onComplete) => {
  const _path = 'H:/nft-nodejs/';
  var _traits = [];

  const background = Traits.getBackground();
  const backgroundJimp = await Jimp.read(_path + '/Traits/background/' + background + '.png');
  _traits.push({
    trait_type: 'Background',
    value: background,
  });

  var _composedImage = backgroundJimp; // ?

  const veryBigPentagon = Traits.getVerybig();
  const veryBigPentagonJimp = await Jimp.read(
    _path + '/Traits/very_big/' + veryBigPentagon + '.png'
  );
  _traits.push({
    trait_type: 'VeryBigPentagon',
    value: veryBigPentagon,
  });

  _composedImage.blit(veryBigPentagonJimp, 0, 0);

  const bigPentagon = Traits.getBig();
  const bigPentagonJimp = await Jimp.read(_path + '/Traits/big/' + bigPentagon + '.png');
  _traits.push({
    trait_type: 'BigPentagon',
    value: bigPentagon,
  });

  _composedImage.blit(bigPentagonJimp, 0, 0);

  const mediumPentagon = Traits.getMedium();
  const mediumPentagonJimp = await Jimp.read(_path + '/Traits/medium/' + mediumPentagon + '.png');
  _traits.push({
    trait_type: 'MediumPentagon',
    value: mediumPentagon,
  });

  _composedImage.blit(mediumPentagonJimp, 0, 0);

  const smallPentagon = Traits.getSmall();
  const smallPentagonJimp = await Jimp.read(_path + '/Traits/small/' + smallPentagon + '.png');
  _traits.push({
    trait_type: 'SmallPentagon',
    value: smallPentagon,
  });

  _composedImage.blit(smallPentagonJimp, 0, 0);

  const verySmallPentagon = Traits.getVerySmall();
  const verySmallPentagonJimp = await Jimp.read(_path + '/Traits/very_small/' + verySmallPentagon + '.png');
  _traits.push({
    trait_type: 'VerySmallPentagon',
    value: verySmallPentagon,
  });

  _composedImage.blit(verySmallPentagonJimp, 0, 0);

  await _composedImage.write('Output/images/' + index + '.png');
  await sleep(20); //We give some time for the image to be actually saved in our files
  const _readableStream = await fs.createReadStream(_path + '/Output/images/' + index + '.png');
  const _ipfs = await pinata.pinFileToIPFS(_readableStream);

  await fs.writeFileSync(
    'Output/' + index,
    JSON.stringify({
      name: 'My NFT #' + index,
      traits: _traits,
      image: 'https://ipfs.io/ipfs/' + _ipfs.IpfsHash,
    })
  );

  onComplete();
};

module.exports = {
  build,
};
