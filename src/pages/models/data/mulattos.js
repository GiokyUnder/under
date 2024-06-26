import alvinImage1 from "../../../assets/img/models/mulattos/alvin.webp";
import alvinImage2 from "../../../assets/img/models/mulattos/alvin2.webp";
import alvinImage3 from "../../../assets/img/models/mulattos/alvin3.webp";
import alvinImage4 from "../../../assets/img/models/mulattos/alvin4.webp";
import alvinImage5 from "../../../assets/img/models/mulattos/alvin5.webp";

import gloriaImage2 from "../../../assets/img/models/mulattos/gloria2.webp";
import gloriaImage3 from "../../../assets/img/models/mulattos/gloria3.webp";

import jeziImage1 from "../../../assets/img/models/mulattos/jezi.webp";
import jeziImage2 from "../../../assets/img/models/mulattos/jezi2.webp";

import miaImage1 from "../../../assets/img/models/mulattos/mia.webp";
import miaImage2 from "../../../assets/img/models/mulattos/mia2.webp";

import ronaImage1 from "../../../assets/img/models/mulattos/rona.webp";
import ronaImage2 from "../../../assets/img/models/mulattos/rona2.webp";

export const mulattoModels = [
  {
    params: { id: "alvin" },
    props: {
      name: "Алвин",
      price: "80.000",
      age: "23",
      height: "172",
      weight: 55,
      images: [alvinImage1, alvinImage2, alvinImage3, alvinImage4, alvinImage5],
      about:
        "Алвин — стильный и харизматичный модель, который обожает мир музыки и танцев. Он участвует в музыкальных проектах и фотосессиях, делая успешную карьеру в индустрии развлечений.",
    },
  },
  {
    params: { id: "gloria" },
    props: {
      name: "Глория",
      price: "80.000",
      age: "23",
      height: "172",
      weight: 55,
      images: [gloriaImage2, gloriaImage3],
      about:
        "Глория — изысканная и утонченная модель, увлекающаяся высокой модой и роскошными вечеринками. Она часто посещает мировые столицы моды, где представляет новые коллекции и дизайнерские образы.",
    },
  },
  {
    params: { id: "jezi" },
    props: {
      name: "Джези",
      price: "80.000",
      age: "23",
      height: "172",
      weight: 55,
      images: [jeziImage1, jeziImage2],
      about:
        "Джези — вдохновенная и творческая модель, увлекающаяся искусством и фотографией. Она часто создает уникальные образы и участвует в креативных проектах и выставках.",
    },
  },
  {
    params: { id: "mia" },
    props: {
      name: "Миа",
      price: "80.000",
      age: "23",
      height: "172",
      weight: 55,
      images: [miaImage1, miaImage2],
      about:
        "Миа — стильная и энергичная модель, увлекающаяся спортом и активным образом жизни. Она любит путешествовать и открывать для себя новые горизонты.",
    },
  },
  {
    params: { id: "rona" },
    props: {
      name: "Рона",
      price: "80.000",
      age: "23",
      height: "172",
      weight: 55,
      images: [ronaImage1, ronaImage2],
      about:
        "Рона — чувственная и загадочная модель, увлекающаяся астрологией и духовной практикой. Она часто изучает звезды и тайны Вселенной, стремясь понять глубинные законы жизни.",
    },
  },
];
