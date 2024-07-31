document.addEventListener("touchstart", function() {}, true);

const questions = [
    "오늘 수업에서 배운 로봇 중<br>AI 로봇이 있다.",
    "로봇의 눈 역할을 하는 센서는<br>카메라이다.",
    "로봇은 항상 정해진 일을<br>수행한다."
];
const answers = [true, true, false];
let currentQuestion = 0;

const app0Container = document.getElementById('App0Container');
const app1Container = document.getElementById('App1Container');
const app2Container = document.getElementById('App2Container');
const questionElement = document.getElementById('question');
const OButton = document.getElementById('OButton');
const XButton = document.getElementById('XButton');
const OButtonContainer = document.getElementById('OButtonContainer');
const XButtonContainer = document.getElementById('XButtonContainer');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const answerfin1 = document.getElementById('answerfin1');
const answerfin2 = document.getElementById('answerfin2');
const nextButton = document.getElementById('nextButton');
const quizStartButton = document.getElementById('QuizStart');

function checkAnswer(isCorrect) {
    if (isCorrect) {
        if (currentQuestion === questions.length - 1) {
            answerfin1.classList.remove('hidden');
        } else {
            answer1.classList.remove('hidden');
        }
        answer2.classList.add('hidden');
        answerfin2.classList.add('hidden');
    } else {
        if (currentQuestion === questions.length - 1) {
            answerfin2.classList.remove('hidden');
        } else {
            answer2.classList.remove('hidden');
        }
        answer1.classList.add('hidden');
        answerfin1.classList.add('hidden');
    }
    nextButton.classList.remove('hidden');
}

OButton.addEventListener('click', () => {
    checkAnswer(answers[currentQuestion] === true);
});

XButton.addEventListener('click', () => {
    checkAnswer(answers[currentQuestion] === false);
});

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questionElement.innerHTML = questions[currentQuestion];
        answer1.classList.add('hidden');
        answer2.classList.add('hidden');
        answerfin1.classList.add('hidden');
        answerfin2.classList.add('hidden');
        nextButton.classList.add('hidden');
    } else {
        app1Container.classList.add('hidden');
        app2Container.classList.remove('hidden');
    }
});

quizStartButton.addEventListener('click', () => {
    app0Container.classList.add('hidden');
    app1Container.classList.remove('hidden');
    questionElement.innerHTML = questions[currentQuestion];
});
