
var questions = [
  {
    question: "What state in the us produces the most hops?",
    choices: ["A. CA", "B. ID", "C. OR", "D. WA"],
    answer: "D. WA"
  },
  {
    question: "What country exports the most hops from the USA?",
    choices: ["A. Belgium", "B. China", "C. Canada", "D. Australia"],
    answer: "A. Belgium"
  },
  {
    question: "What is the number One Beer company in Wa State?",
    choices: ["A. Fremont", "B. Elysian", "C. Georgetown", "D. Redhook"],
    answer: "B. Elysian"
  },
  {
    question: "what county in Washington produces the most hops?",
    choices: ["A. Benton", "B. King", "C. Yakima", "D. Cowlitz"],
    answer: "C. Yakima"
  },
  {
    question: "What percent of US Hop Crop does Washington produce?",
    choices: ["A. 82%", "B. 95%", "C. 67%", "D. 77%"],
    answer: "D. 77%"
  },

];
var questionindex = 0
var time=90
var interval;
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesup");
var button = document.getElementById("startbutton");
button.addEventListener("click",function(){
  document.getElementById("startscreen").style.display="none"
  document.getElementById("quizscreen").style.display="block"
renderquestion()
startTimer()
});
function startTimer(params) {
  interval=setInterval(function(){
  if (time>0) {
    time--
    timer.innerText=time
  }
  },1000)
  
}

function renderquestion(){
  if (questionindex===questions.length) {
    document.getElementById("quizscreen").style.display="none" 
    document.getElementById("endscreen").style.display="block"
    var initials=prompt("What are you initials");
    var scoreobj={initials,time}
    localStorage.setItem("highscrore",JSON.stringify(scoreobj))
    return
  }
  Remove()
  var questionobj = questions[questionindex]
  document.getElementById("questiontext").innerText=questionobj.question
  for (i=1;i <= 4;i++){
    document.getElementById("btn"+[i]).innerText=questionobj.choices[i-1]
  }
}
document.getElementById("quizscreen").addEventListener("click",function(event){
  //if(event.target.nodeName==="BUTTON"){
    var choice = event.target.innerText
    var correctC = questions[questionindex].answer
   // console.log(choice)
    //console.log(correctC)
    if(choice==correctC){
      //Remove(); 
      correctClick()
      //deduct time to timer
    }
    else{
     //Remove();
     incorrectClick()
     
    }
 // }
})
function Remove() {
  btn1.removeEventListener("click", correctClick);
  btn1.removeEventListener("click", incorrectClick);
  btn2.removeEventListener("click", correctClick);
  btn2.removeEventListener("click", incorrectClick);
  btn3.removeEventListener("click", correctClick);
  btn3.removeEventListener("click", incorrectClick);
  btn4.removeEventListener("click", correctClick);
  btn4.removeEventListener("click", incorrectClick);
}
function correctClick() {
  console.log("correct")
  Remove()
  questionindex++
  renderquestion()
//move to next question
}
function incorrectClick() {
  console.log("not correct");
  time-=5
  Remove()
  //deduct time move to next question
}
