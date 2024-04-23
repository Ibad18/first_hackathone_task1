// Retrieve score from localStorage and display it
// const score = localStorage.getItem("score");
// document.getElementById("score").textContent = score;

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
document.getElementById("result").innerText = score;
document.getElementsById("quiz_topic").innerText = "1. The global increase in greenhouse gases has been attributed to:";