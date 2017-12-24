export function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

export const loadLevel = (levelName) => {
  return fetch(`/levels/${levelName}.json`)
  .then((r) => {
    return r.json();
  });
}