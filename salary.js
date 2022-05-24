function salary(input) {
  let pages = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 1; i <= pages; i++) {
    let namePage = String(input[i + 1]);
    switch (namePage) {
      case "Facebook":
        salary -= 150;
        break;
      case "Instagram":
        salary -= 100;
        break;
      case "Reddit":
        salary -= 50;
        break;
    }
  }

  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary.toFixed(0));
  }
}
salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
