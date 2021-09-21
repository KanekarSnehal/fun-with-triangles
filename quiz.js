const quizForm=document.querySelector(".quiz-form");
const submitAnswerButton=document.querySelector("#submit-answer-button");
const output=document.querySelector("#output");

const correctAnswers=["180°","Different","60°","Right Angled Triangle","90°"];

submitAnswerButton.addEventListener("click",calculateScore);

function calculateScore()
{
    let i=0;
    let score=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(correctAnswers[i]===value)
        {
            score++;
        }
        i++;
    }
    output.innerText="Your score is "+score;
}