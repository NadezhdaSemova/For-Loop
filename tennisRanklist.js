function tennisRanklist(input) {
  let tournirs = Number(input[0]);
  let startPoint = Number(input[1]);
  let index = 2;

  let totalScore = 0;
  let counterW = 0;

  for (let i = 1; i <= tournirs; i++) {
    let reach = String(input[index]);
    index++;

    switch (reach) {
      case "W":
        totalScore += 2000;
        counterW++;
        break;
      case "F":
        totalScore += 1200;
        break;
      case "SF":
        totalScore += 720;
        break;
    }
  }
  
  let average = Math.floor(totalScore / tournirs);
  let finalScore = totalScore + startPoint;
  let percentWining = (counterW / tournirs) * 100;

  console.log(`Final points: ${finalScore}`);
  console.log(`Average points: ${average}`);
  console.log(`${percentWining.toFixed(2)}%`);
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])

