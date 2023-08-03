/* Ce fichier va servir à coordonné les codes pour le temps fourni par l'api a des images
afin qu'il y ai une image de soleil quand il fait beau etc, dans l'application*/

const WEATHER_INTERPRETATIONS = [
  {
    codes: [0],
    label: "Ensoleillé",
    image: require("../assets/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("../assets/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Pluvieux",
    image: require("../assets/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Neigeux",
    image: require("../assets/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Orageux",
    image: require("../assets/thunder.png"),
  },
];

export function weatherInterpretation(code) {
  return WEATHER_INTERPRETATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}
