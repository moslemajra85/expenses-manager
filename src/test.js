const array = [1, 2, 3, 4];

function filter(filterString) {
  if (filterString === "all") return array;
  else if (filterString === "even")
    return array.filter((item) => item % 2 === 0);
  else if (filterString === "odd")
    return array.filter((item) => item % 2 !== 0);
}


const r1 = filter("all")
const r2 = filter("odd")
const r3 = filter("even")

console.log(r1);
console.log(r2);
console.log(r3);
console.log(array);