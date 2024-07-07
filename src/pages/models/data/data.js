import { asianModels } from "./asian";
import { blondModels } from "./blonds";
import { brunnetes } from "./brunettes";
import { feetModels } from "./feet";
import { mulattoModels } from "./mulattos";
import { redheadModels } from "./redhead";
import { skinnyModels } from "./skinny";
import { youthModels } from "./youth";

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const models = shuffle([
  ...asianModels,
  ...blondModels,
  ...brunnetes,
  ...feetModels,
  ...mulattoModels,
  ...redheadModels,
  ...skinnyModels,
  ...youthModels,
]);

export const mainPageModels = shuffle([
  ...asianModels.slice(0, 2),
  ...blondModels.slice(0, 2),
  ...brunnetes.slice(0, 2),
  ...feetModels.slice(0, 2),
  ...mulattoModels.slice(0, 2),
  ...redheadModels.slice(0, 2),
  ...skinnyModels.slice(0, 2),
  ...youthModels.slice(0, 2),
]);

export const servicePageModels = shuffle([
  ...asianModels.slice(3, 4),
  ...blondModels.slice(3, 4),
  ...brunnetes.slice(3, 4),
  ...feetModels.slice(3, 4),
  ...mulattoModels.slice(3, 4),
  ...redheadModels.slice(3, 4),
  ...skinnyModels.slice(3, 4),
  ...youthModels.slice(3, 4),
]);
