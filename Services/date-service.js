/* Ce fichier sert à géré la logique de l'horloge*/

export function nowToHHMM() {
  const date = new Date();
  //le padStart ou pasEnd sert à rajouter un caractère de ton choix, ici "0" devant ou derrière
  //l'élément auquel c'est appliqué. ATTENTION : ça ne marche que sur les string
  return `${date.getHours()}:${date.getMinutes().toString().padStart(2, "0")}`;
}
