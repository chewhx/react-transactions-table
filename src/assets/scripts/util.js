export const format$ = (number) =>
  number === null
    ? "-"
    : new Intl.NumberFormat("en-SG", {
        style: "currency",
        currency: "SGD",
      }).format(number);

export const _sum = (arr) => {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

export const _sortByDate = (arr) => {
  const arr1 = arr.map((e) => Object.entries(e));
  const arr2 = arr1.sort((a, b) => new Date(b[1][1]) - new Date(a[1][1]));
  return arr2.map((e) => Object.fromEntries(e));
};

export const _sortDescending = (arr) => {
  Object.entries(arr).sort((a,b) => b[1] - a[1])
}

export const _fixPathname = (str) => {
  //convert string to array of letters
  const str_arr = Array.from(str);
  // destructure array of letters
  const [a, b, ...rest] = str_arr;
  // join letters to create capitalised string
  return b.toUpperCase() + rest.join("");
};
