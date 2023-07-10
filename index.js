const start = document.getElementById("start")
const questionBox = document.getElementById("questionBox")
const next = document.getElementById("next")
const questionItself = document.getElementById("questionItself")
const answerBtns = document.getElementById("answerBtns")
let randomQuestions, currQuestionIndex

start.addEventListener("click", startGame)
next.addEventListener("click", () => {
  currQuestionIndex++
  setNextQuestion()
})

function startGame() {
  //   console.log("Game started")
  start.classList.add("hidden")
  randomQuestions = questions.sort(() => Math.random() - 0.5)
  currQuestionIndex = 0
  questionBox.classList.remove("hidden")
  next.classList.remove("hidden")
  setNextQuestion()
}
function setNextQuestion() {
  showQuestion(randomQuestions[currQuestionIndex])
}

function showQuestion(question) {
  resetState()
  questionItself.innerText = question.question
  question.answers.forEach((answer) => {
    const btn = document.createElement("button")
    btn.innerText = answer.text
    btn.classList.add("btn")
    if (answer.correct) {
      btn.dataset.correct = answer.correct
    }
    btn.addEventListener("click", selectAnswer)
    // console.log(btn.dataset.correct)
    answerBtns.appendChild(btn)
  })
}
function resetState() {
  next.classList.add("hidden")
  while (answerBtns.firstChild) {
    answerBtns.removeChild(answerBtns.firstChild)
  }
}
function selectAnswer(e) {
  const selectedAnswer = e.target
  const correct = selectedAnswer.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerBtns.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  })
  if (randomQuestions.length > currQuestionIndex + 1) {
    next.classList.remove("hidden")
  } else {
    start.innerText = "Restart"
    start.classList.remove("hidden")
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add("correct")
  } else {
    element.classList.add("wrong")
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

const questions = [
  {
    question: "Who is the richest guy?",
    answers: [
      { text: "Andrew Tate", correct: true },
      { text: "Elon Musk", correct: false },
      { text: "Jeff Bozz", correct: false },
      { text: "Mark Zuckerberg", correct: false },
    ],
  },
  {
    question: "Who created this simple Quiz?",
    answers: [
      { text: "Haris", correct: false },
      { text: "Razia", correct: true },
      { text: "Messi", correct: false },
      { text: "Mr. Bean", correct: false },
    ],
  },
  {
    question: "Where is Pyramids located?",
    answers: [
      { text: "USA", correct: false },
      { text: "Russia", correct: false },
      { text: "Egypt", correct: true },
      { text: "My home", correct: false },
    ],
  },
  {
    question: "Can you Hack Nasa with HTML?",
    answers: [
      { text: "Yess", correct: true },
      { text: "No way", correct: false },
      { text: "Yess Of course", correct: true },
    ],
  },
  {
    question: "When did the covid happen?",
    answers: [
      { text: "Yesterday", correct: false },
      { text: "2020", correct: false },
      { text: "end of 2019", correct: true },
    ],
  },
  {
    question: "Are you enjoying this Quiz?",
    answers: [
      { text: "Yes, I did", correct: true },
      { text: "I hate quizzez", correct: false },
    ],
  },
]

// function randomNumebr() {
//   console.log(questions.sort(() => Math.random() - 0.5))
// }

// randomNumebr()
