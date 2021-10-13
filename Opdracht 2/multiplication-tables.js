//tafel 9 ix9 = uitkomst
const vermenigvuldiger = 9;
for (let i = 0; i <= 10; i++) {
  let result = vermenigvuldiger * i;
  console.log(vermenigvuldiger + " * " + i + " = " + result);
}

// Bonus tafel 1 tot 10 en allemaal 1tot10 vermenigvuldigen.
for (let vermenigvuldiger2 = 0; vermenigvuldiger2 <= 10; vermenigvuldiger2++) {
  for (let i = 0; i <= 10; i++) { // zelfde als hierboven
    let result = vermenigvuldiger2 * i;
    console.log(vermenigvuldiger2 + " * " + i + " = " + result);
  }
}