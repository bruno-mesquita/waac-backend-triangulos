export default function sumArray(array) {
  let sum = 0;
  let pivo = 0; // var para garantir que a linha se cima some somente com dois item adjacentes da linha de baixo
  const numSelect = []; // guarda o caminho percorrido

  array.map(element => {
    if (element.length === 1) {
      sum += element[pivo];
      numSelect.push(element[pivo]);
      return;
    }
    if (element[pivo] > element[pivo + 1]) {
      sum += element[pivo];
      numSelect.push(element[pivo]);
    } else {
      sum += element[pivo + 1];
      numSelect.push(element[pivo + 1]);
      pivo++;
    }
  });

  return [sum, numSelect];
}
