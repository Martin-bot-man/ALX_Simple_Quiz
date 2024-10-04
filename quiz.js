function checkAnswer(){
    const correctAnswer = "4";
userAnswer=document.querySelector("quiz").value
const answerCheckbox = document.getElementById("choice1");


if (userAnswer === correctAnswer){
userAnswer.textContent = "Correct! Well done."
answerCheckbox.checked = true;
}
else{
    userAnswer.textContent = "That's incorrect. Try again!".
    answerCheckbox.checked = false;
}
}
document.getElementById("submit-answer").addEventListener("clicked", checkAnswer);
