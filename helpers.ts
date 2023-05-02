import imageData from './imageData';

export const getStarshipImageByName = (name:any) => {
  const starship = imageData.find((ship) => ship.name.toLowerCase() === name.toLowerCase());
  return starship ? starship.img : null;
};