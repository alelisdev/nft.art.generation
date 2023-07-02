const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.matic;

// General metadata for Ethereum
const namePrefix = "Juice Token";
const description =
  "Juice is an NFT Collection of 40,000 unique items from Endblock.io the first Gamified DeFi platform. Stake your Juice NFT and get a share of all the transactions done in Endblock.io";
const baseUri = "ipfs://NewUriToReplace";

const maticMetadata = {
  symbol: "JUICE",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "http://Endblock.io",
  creators: [
    {
      address: "0x....",
      share: 100,
    },
  ],
};

// If you have selected Matic then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 40000,
    layersOrder: [
      {
        name: "Background",
        rarity: [0.01, 0.09, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21],
      },
      {
        name: "Bright",
        rarity: [0.01, 0.09, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21],
      },
      {
        name: "Clover",
        rarity: [0.01, 0.09, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21],
      },
      {
        name: "Floor",
        rarity: [0.01, 0.09, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21],
      },
      {
        name: "Legendary",
        rarity: [
          6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25, 6.25,
          6.25, 6.25, 6.25, 6.25, 6.25,
        ],
      },
      {
        name: "Luck Gloss",
        rarity: [0.01, 0.09, 0.9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21],
      },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 1920,
  height: 1920,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "$";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  maticMetadata,
  gif,
  preview_gif,
};
