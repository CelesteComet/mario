class SpriteSheet {
  constructor(image, width, height) {
    this.image = image; 
    this.width = width; 
    this.height = height;
    this.tiles = new Map();
  } 

  define(name, x, y) {
    const buffer = document.createElement('canvas');
    buffer.width = this.width;
    buffer.height = this.height;
    buffer
      .getContext('2d')
      .drawImage(
        this.image,
        x * this.width, // sx
        y * this.height, // sy
        this.width, // s-width
        this.height, // s-height
        0, // destination-x
        0, // destination-y
        this.width, // destination-width
        this.height // destination-height
      )
    this.tiles.set(name, buffer)
  }

  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x, y);
  }

  drawTile(name, context, x, y) {
    this.draw(name, context, x * this.width, y * this.height);
  }
}

export default SpriteSheet;