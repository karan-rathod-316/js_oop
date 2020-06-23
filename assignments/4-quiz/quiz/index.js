let quizComponents = document.querySelector('.quiz-components')
quizComponents.style.display = "none"
let start = document.querySelector(".start")
start.addEventListener('click', () => {
    quizComponents.style.display = "block";
    start.style.display = "none";
})

class Question {
    constructor(title, options, correctAnswerIndex) {
        this.title = title;
        this.options = options;
        this.correctAnswerIndex = correctAnswerIndex;
    }
    isCorrect(userAnswer) {
        return this.correctAnswerIndex === userAnswer;
    }

    getCorrectAnswer() {
        return this.options[this.correctAnswerIndex]
    }
    render() {
            // let root = document.getElementById("root");

            return `<form>
        <fieldset>
          <legend>${this.title}</legend>
          <div>
          ${this.options.map(
              (option, index) =>
            `<input type="radio" class="radio-btn" id="quizQuestion"
             name=${this.title} value=${index}>
            <label for="quizQuestion">${option}</label>
            `).join("")}
        
          </div>
          <div>
        </div>
        </fieldset>
      </form>`
    }

}

let questionOne = new Question("Did you brush your teeth", ["Yes", "No", "I never do it", "I've never done it"],
    1);

let questionTwo = new Question("What is your weight?", ["10", "100", "20", "30"],
1);



console.log(questionOne)
console.log("isCorrect", questionOne.isCorrect("option2"))
console.log("isCorrect", questionOne.isCorrect("option1"))
console.log("getCorrectAnswer ", questionOne.getCorrectAnswer())
questionOne.render();
questionTwo.render();
let root = document.getElementById("root")
let nextElm = document.querySelector('.btn')
let notification = document.querySelector(".notification")
let restart = document.querySelector('.restart')
let finalScore = document.querySelector('.final-score')


class Quiz {
    constructor (rootElm, nextElm, questions, finalScore) {
        this.questions = questions;
        this.rootElm = rootElm;
        this.activeQuestionIndex = 0;
        this.nextElm= nextElm;
        this.score = 0;
        this.handleFunctions = this.handleFunctions();
        this.finalScore = finalScore
    }

    handleFunctions(){
        this.nextElm.addEventListener("click",() => {
            let radioBtn = document.querySelectorAll('.radio-btn')
            let selectBtn = [...radioBtn].filter(elm => {
                return elm.checked
            })
            console.log(selectBtn)
            if (!selectBtn[0]) {
                return notification.innerText = "Please select an option to continue"
                
            }
            let currentQuestion = this.questions[this.activeQuestionIndex]
            console.log(selectBtn[0].value)
            if (currentQuestion.isCorrect(+selectBtn[0].value)){
                this.score++
            }
            this.nextQuestion(this.activeQuestionIndex);
        })
        this.createUI()
    }

    nextQuestion () {
        notification.innerText = "";
        // finalScore.innerText = "";
        this.activeQuestionIndex++;
        if (this.activeQuestionIndex > this.questions.length -1)
        {
            root.style.display = "none";
            nextElm.style.display = "none";
            document.querySelector('.final-score').innerText = `Final score is ${this.score}`
            console.log(this.score);
            restart.style.display = "block";
            restart.innerText = "Restart"
            restart.addEventListener('click', this.restartQuiz)
            return;
        }
        this.createUI();
    }

    restartQuiz () {
        let quizRestart = new Quiz (root, nextElm, [questionOne, questionTwo], finalScore);
        quizRestart.createUI()       
        root.style.display = "block";
        nextElm.style.display = "block" 
        finalScore.innerText = "";
        restart.style.display = "none";

    }

    createUI() {
        restart.style.display = "none";

        this.rootElm.innerHTML = this.questions[this.activeQuestionIndex].render()
    }
}


let quiz = new Quiz (root, nextElm, [questionOne, questionTwo], finalScore);
quiz.createUI();
console.log(quiz);

//On click on next, check whether the selected answer index is true or not
//if true, this.score++
//change this is handlefunctions