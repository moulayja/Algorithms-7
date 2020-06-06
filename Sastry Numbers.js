const isSastry = n => !(Math.sqrt(+`${n}${n+1}`) % 1);


// Solution 2

const isSastry = num => Number.isInteger(Math.sqrt(`${num}${num + 1}`));
