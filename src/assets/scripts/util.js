export const format$ = (number) =>
  number === null
    ? "-"
    : new Intl.NumberFormat("en-SG", {
        style: "currency",
        currency: "SGD",
      }).format(number);


export const _sum = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}