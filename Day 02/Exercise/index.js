let alphabet = " abcdefghijklmnopqrstuvwxyz";
let arralphabet = alphabet.split("");
let trans = (arrnum) => {
  if (0 < arrnum.length && arrnum.length <= 1000) {
    let arralpha = arrnum.map((val) => {
      for (let i = 0; i < arralphabet.length; i++) {
        if (val == i) {
          return arralphabet[i];
        }
      }
    });
    return arralpha.join("");
  }
};
console.log(trans([16, 21, 18, 23, 1, 4, 8, 9, 11, 1]));
