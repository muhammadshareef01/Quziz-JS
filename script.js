const questions = [
    {
        question: "Which country for which Ronaldo play?",
        options: ["Portugal", "Brazil", "Germany", "Argentina"],
        correctAnswer: "Portugal"
    },
    {
      
       question:"Who is Ronaldo mostly compared to?",
       options:["Harry Kane", "Mohd Salah", "Neymar", "Messi"],
       correctAnswer: "Messi"
    },
    {
    question:"In which year did he win his first Ballon d'Or and FIFA World   Player of the Year awards?",
      options:["2008","2009","2010","2011"],
      correctAnswer:"2008"
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");
const nextButton = document.getElementById("next-button");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        scoreDisplay.textContent = score;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {

        questionText.textContent = "Quiz completed!";
        optionsContainer.innerHTML = "";
        nextButton.style.display = "none";
    }
}

nextButton.addEventListener("click", () => {
    checkAnswer(null);
});

displayQuestion();
