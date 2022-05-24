function cleverLily(input) {
  let age = Number(input[0]);
  let priceWashingMachine = Number(input[1]);
  let priceToys = Number(input[2]);

  let totalMoney = 0;
  let counterMoney = 0;
  for (let i = 1; i <= age; i++) {
    if (i % 2 === 0) {
      counterMoney++;
      totalMoney += 10 * counterMoney;
      totalMoney -= 1;
    } else {
      totalMoney += priceToys;
    }
  }
  if (totalMoney >= priceWashingMachine) {
    console.log(`Yes! ${(totalMoney - priceWashingMachine).toFixed(2)}`);
  } else {
    console.log(`No! ${(priceWashingMachine - totalMoney).toFixed(2)}`);
  }
}
cleverLily(["21",
"1570.98",
"3"])

