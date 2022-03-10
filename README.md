# Installation
- Environment: node `14.19.0`
- `npm i`
# Generation Dons NFT arts
- `npm run build`

# Generation Preview Gif for Dons NFT arts
- `npm run preview_gif`

# Setup number of images
- src/config.js: `growEditionSizeTo: 150,`

# Setup quality of the image
- src/config.js:  `format{ width: 4096, height: 4096, smoothing: false}`

# Setup rarity in each layer
- in the each directory of src/layers, we can set filename with the rarity ex. `background#100.png, background#50.png`
