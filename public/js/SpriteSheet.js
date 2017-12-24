class SpriteSheet {
  constructor(image, spriteWidth, spriteHeight) {
    this.image = image;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.tiles = {};
  }

  // position x,y here defines where to begin choosing the sprite from the sprite sheet
  define(name, posX, posY) {
    const buffer = document.createElement('canvas');
    buffer.width = this.spriteWidth;
    buffer.height = this.spriteHeight;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        posX * this.spriteWidth, posY * this.spriteHeight, this.spriteWidth, this.spriteHeight,
        0, 0, this.spriteWidth, this.spriteHeight);
    this.tiles[name] = buffer;
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