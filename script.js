const questions = [
    {
        question: "What does HTML stands for?",
        answers: [
            { text: "Home Tool Markup Language", correct: false },
            { text: "Hyperlinks And Text Markup Language", correct: false },
            { text: "Hyper Text Markup Language", correct: true },
            { text: "Hyper Text Modul Language", correct: false }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Creative Style Sheets", correct: false },
            { text: "Cascading Style Sheets", correct: true },
            { text: "Color Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false }
        ]
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?",
        answers: [
            { text: "In the <body> section", correct: false },
            { text: "At the end of the document", correct: false },
            { text: "In the <head> section", correct: true },
            { text: "In the <title> tag", correct: false }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove('hide');
    resultContainer.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
});

function showScore() {
    resultContainer.classList.remove('hide');
    scoreElement.innerText = `Your Score: ${score}`;
    nextButton.classList.add('hide');
}

restartButton.addEventListener('click', startQuiz);

startQuiz();