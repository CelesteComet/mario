import SpriteSheet from './SpriteSheet.js';
import { loadImage, loadLevel } from './loaders.js';

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function drawBackground(background, context, sprites) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  })
};

loadImage('/img/tiles.png')
.then(image => {
  const spriteSheet = new SpriteSheet(image, 16, 16); // SpriteSheet class takes image and height and width of a sprite
  spriteSheet.define('ground', 0, 0);
  spriteSheet.define('sky', 3, 23);

  for (let x = 0; x < 12; x++) {
    for (let y = 0; y < 14; y++) {
      spriteSheet.drawTile('sky', context, x, y);
    }
  }
  loadLevel('1-1')
    .then(level => {
      const backgrounds = level.backgrounds;
      backgrounds.forEach(background => {
        drawBackground(background, context, spriteSheet);
      }) 
    })
});







