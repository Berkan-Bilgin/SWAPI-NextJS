import imageData from './imageData';

export const getStarshipImageByName = (name) => {
  const starship = imageData.find((ship) => ship.name.toLowerCase() === name.toLowerCase());
  return starship ? starship.img : null;
};