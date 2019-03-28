export default function(num) {
  num = Math.abs(num);
  num = num.toFixed(2);

  const numSplit = num.split(".");

  let int = numSplit[0];

  let newInt = "";
  if (int.length > 3) {
    for (let i = int.length - 1, j = 1; i >= 0; i--, j++) {
      newInt = int[i] + newInt;
      if (j % 3 === 0) {
        newInt = "," + newInt;
      }
    }
    int = newInt;
  }

  const dec = numSplit[1];

  return int + "." + dec;
}
