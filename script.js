let numbers = [3, 5, 10, 2, 8];

let media = numbers.reduce( (acc, el) => acc + el, 0) / numbers.length;
let filteredMinor = numbers.filter(el => el < media);
let filteredMajor = numbers.filter(el => el > media);

console.log(`media = ${media}, valori minori = [${filteredMinor}], valori maggiori = [${filteredMajor}] `);
console.log(`i valori minori della media sono: ${filteredMinor.length}, i valori maggiori: ${filteredMajor.length} `);