import { loadImage } from './loaders.js';
import SpriteSheet from './SpriteSheet.js';

export function loadMarioSprite() {
  return loadImage('/img/characters.gif')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16); // SpriteSheet class takes image and height and width of a sprite
    sprites.define('idle', 276, 44, 16, 16);
    return sprites
  });
}

export function loadBackgroundSprites() {
  return loadImage('/img/tiles.png')
  .then(image => {
    const sprites = new SpriteSheet(image, 16, 16); // SpriteSheet class takes image and height and width of a sprite
    sprites.defineTile('ground', 0, 0, 16, 16);
    sprites.defineTile('sky', 3, 23, 16, 16);
    return sprites
  });
};