class SpriteSheet {
  constructor(image, spriteWidth, spriteHeight) {
    this.image = image;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.tiles = {};
  }

  // position x,y here defines where to begin choosing the sprite from the sprite sheet
  define(name, posX, posY, spriteWidth, spriteHeight) {
    const buffer = document.createElement('canvas');
    buffer.width = spriteWidth;
    buffer.height = spriteHeight;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        posX, posY, spriteWidth, spriteHeight,
        0, 0, spriteWidth, spriteHeight);
    this.tiles[name] = buffer;
  }

  defineTile(name, x, y) {
    this.define(name, x * this.spriteWidth, y * this.spriteHeight, this.spriteWidth, this.spriteHeight)
  }

  draw(name, context, posX, posY) {
    const buffer = this.tiles[name];
    context.drawImage(buffer, posX, posY);
  }

  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.spriteWidth, y * this.spriteHeight);
  }
} 

export default SpriteSheet;