const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically




const layerConfigurations = [
  {
    layerMutual : {
      Backgrounds: [],
      Bodies: [],
      Horns: [],
      Tattoos: ['Sweaters', 'ShirtsNoJacket', 'Jackets'],
      Shirts: [],
      ShirtsNoJacket: [],
      Sweaters: ['Shirts', 'ShirtsNoJacket'],
      Jerseys: ['Shirts', 'ShirtsNoJacket', 'Sweaters'],
      Suspenders: ['Jackets', 'Sweaters', 'ShirtsNoJacket'],
      Necklaces: ['ShirtsNoJacket', 'Sweaters'],
      Jackets: ['ShirtsNoJacket', 'Sweaters'],
      Earrings: [],
      Eyes: [],
      Eyeballs: [],
      Eyebrows: [],
      Glasses: [],
      Hair: [],
      Wigs: [],
      Hats: [],
      Horniments: [],
      Mustache: [],
      Mouths: [],
      Masks: ['Mouths', 'Mustache', 'Glasses', 'Wigs', 'Hats']
    },

    // required layer or random layer
    randLayers : ['Tattoos', 'Shirts', 'ShirtsNoJacket', 'Sweaters', 'Jerseys', 'Suspenders', 'Necklaces', 'Jackets',
    'Earrings', 'Eyeballs', 'Glasses', 'Wigs', 'Hats', 'Horniments', 'Mustache', 'Masks'
    ],
    growEditionSizeTo: 150,
    layersOrder: [
      { name: "Backgrounds" },
      { name: "Bodies" },
      { name: "Horns" },
      { name: "Tattoos" },
      { name: "Shirts" },
      { name: "ShirtsNoJacket" },
      { name: "Sweaters" },
      { name: "Jerseys" },
      { name: "Suspenders" },
      { name: "Necklaces" },
      { name: "Jackets" },
      { name: "Earrings" },
      { name: "Eyes" },
      { name: "Eyeballs" },
      { name: "Eyebrows" },
      { name: "Glasses" },
      { name: "Hair" },
      { name: "Wigs" },
      { name: "Hats" },
      { name: "Horniments" },
      { name: "Mustache" },
      { name: "Mouths" },
      { name: "Masks" }
    ],
    // layersOrder: [
    //   { name: "Background" },
    //   { name: "Characters" },
    //   { name: "Eyes" },
    //   { name: "Mouth" },
    //   // { name: "Eyeswear" },
    //   { name: "headwear" },
    //   { name: "chains" },
    // ],


    // growEditionSizeTo: 5,
    // layersOrder: [



    //   // { name: "Background" },
    //   // { name: "Eyeball" },
    //   // { name: "Eye color" },
    //   // { name: "Iris" },
    //   // { name: "Shine" },
    //   // { name: "Bottom lid" },
    //   // { name: "Top lid" },
    //   // {name: "Background"},
    //   // // {name: "Backgear"},
    //   // {name: "Characters"},
    //   // {name: "headwear"},
    //   // {name: "Eyes"},
    //   // {name: "chains"},
    //   // {name: "Mouth"},
    // ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
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

const rarityDelimiter = "#";

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
  solanaMetadata,
  gif,
  preview_gif,
};
