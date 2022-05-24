function histogram(input) {
  let num = Number(input[0]);

  let countTo200 = 0;
  let countTo399 = 0;
  let countTo599 = 0;
  let countTo799 = 0;
  let countUnder800 = 0;

  for (let i = 1; i <= num; i++) {
    let nextNum = Number(input[i]);
    if (nextNum < 200) {
      countTo200++;
    } else if (nextNum <= 399) {
      countTo399++;
    } else if (nextNum <= 599) {
      countTo599++;
    } else if (nextNum <= 799) {
      countTo799++;
    } else {
      countUnder800++;
    }
  }
  let percent200 = countTo200 / num * 100;
  let percent399 = (countTo399 / num) * 100;
  let percent599 = (countTo599 / num) * 100;
  let percent799 = (countTo799 / num) * 100;
  let percent800 = (countUnder800 / num) * 100;

  console.log(`${percent200.toFixed(2)}%`);
  console.log(`${percent399.toFixed(2)}%`);
  console.log(`${percent599.toFixed(2)}%`);
  console.log(`${percent799.toFixed(2)}%`);
  console.log(`${percent800.toFixed(2)}%`);
}
histogram(["7",
"800",
"801",
"250",
"199",
"399",
"599",
"799"])

