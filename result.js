const myKeyValue = window.location.search;
const urlParams = new URLSearchParams(myKeyValue);
const r1 = urlParams.get("q1");
const r2 = urlParams.get("q2");
const r3 = urlParams.get("q3");
const r4 = urlParams.get("q4");
const r5 = urlParams.get("q5");

let totalScore = 25;
let score = 0;
var ans1 = "Industrial pollution in developing countries";
var ans2 = "18 percent";
var ans3 = "Developing new gasification techniques";
var ans4 = "More cleanly but much more slowly";
var ans5 = "Runoff water containing sediments";

if(r1 == ans1){
    score +=5;
}
if(r2 == ans2){
    score +=5;
}
if(r3 == ans3){
    score +=5;
}
if(r4 == ans4){
    score +=5;
}
if(r5 == ans5){
    score +=5;
}
document.getElementById("result").innerText = "Your Score is : " +score+" Out of 25";
document.getElementById("quiz_topic").innerHTML = "1. The global increase in greenhouse gases has been attributed to:<br>2. The proportion of all greenhouse gases created by coal is approximately:<br>3. Current research aims to increase the energy-producing efficiency of coal by:<br>4. Compared with ordinary coal new, 'clean' coals may generate power:<br>5. To control dust at mine sites, mining companies offen use:";

let select1 = document.createElement("p");
let newSelect1 = document.getElementById("selected_answers");
newSelect1.append(select1);
select1.innerText = "1) " +r1 +" 2) " +r2 +" 3) " +r3 +" 4) " +r4 +" 5) " +r5;
let select2 = document.createElement("p");
let newSelect2 = document.getElementById("correct_answers");
newSelect2.append(select2);
select2.innerText =  "1) " +ans1 +" 2) " +ans2 +" 3) " +ans3 +" 4) " +ans4 +" 5) " +ans5;
