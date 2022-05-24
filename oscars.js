function oscars (input){
let nameActor = String(input[0]);
let pointsAcademy = Number(input[1]);
let numberPoints = Number(input[2]);
let index = 3;

let maximumPoints = 1250.5;
let totalPoints = pointsAcademy;
let end = false;

for (let i = 1; i <= numberPoints; i++) {
    let name = String(input[index]);
    index++;
    let givenPoint = Number(input[index]);
    index++;
    let pointFromName = name.length;
    totalPoints += ( pointFromName * givenPoint) / 2;

if (totalPoints > maximumPoints){
    end = true;
    break;
}
}
if (end){
    console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
}else{
    console.log(`Sorry, ${nameActor} you need ${(maximumPoints - totalPoints).toFixed(1)} more!`);
}
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])	