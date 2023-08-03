/* Ce fichier sert à géré la logique de l'horloge et tous ce qui touche au dates*/

export function nowToHHMM() {
  const date = new Date();
  //le padStart ou pasEnd sert à rajouter un caractère de ton choix, ici "0" devant ou derrière
  //l'élément auquel c'est appliqué. ATTENTION : ça ne marche que sur les string
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
}

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

export function dateToDDMM(date) {
  return `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}
