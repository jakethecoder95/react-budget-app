export default function(num) {
  num = Math.abs(num);
  num = num.toFixed(2);

  const numSplit = num.split(".");

  let int = numSplit[0];
  if (int.length > 3) {
    int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); //input 2310, output 2,310
  }

  const dec = numSplit[1];

  return int + "." + dec;
}
