const initQuiz = function () {
  const questions = [
    {
      questions: "Who founded Facebook?",
      options: ["Mark Zuckerberg", "Elon Musk", "Tim Cook", "Pavel Durov"],
      answer: "Mark Zuckerberg",
    },

    {
      questions: "Who discoverd gravity?",
      options: ["Aristotle", "Isaac Newton", "Pythagoras", "Albert Einstine"],
      answer: "Isaac Newton",
    },

    {
      questions: "Who is the founder of PXXL Space?",
      options: [
        "Carls Robinson",
        "Micheal Ederson",
        "Robinson Honour",
        "Isreal Carnot",
      ],
      answer: "Robinson Honour",
    },

    {
      questions: "What is the capital city of Canada?",
      options: ["Vancouver", "Calgary", "Ottawa", "Toronto"],
      answer: "Ottawa",
    },

    {
      questions: "Which year did world war II end?",
      options: ["1945", "1946", "1947", "1948"],
      answer: "1945",
    },

    {
      questions: "Who is the author of harry potter?",
      options: [
        "J.R.R. Tolkien",
        "J.K. Rowling",
        "George Orwell",
        "Agatha Christie",
      ],
      answer: "J.K. Rowling",
    },

    {
      questions: "Which country won the last world cup?",
      options: ["Brazil", "France", "Argentina", "Nigeria"],
      answer: "Argentina",
    },

    {
      questions: "What is spiderMan real name?",
      options: ["Peter Parker", "Tony Stark", "Burce Wayne", "Steve Rogers"],
      answer: "Peter Parker",
    },

    {
      questions: "What is the full meaning of HTTP?",
      options: [
        "High Tech Transfer Protocol",
        "Hyper Text Transmission Protocol",
        "Hyper Text Transfer Protocol",
        "High Tech Transmission Protocol",
      ],
      answer: "Hyper Text Transfer Protocol",
    },

    {
      questions: "What is does erorr 404 mean?",
      options: [
        "Server error",
        "Connection timeout",
        "Page not found",
        "Access denied",
      ],
      answer: "Page not found",
    },
  ];

  let currentindex = 0;
  let score = 0;
  let timeleft = 60;
  let timer;

  const startButton = document.getElementById("start-js");
  const startBox = document.getElementById("start-div");
  const questionBox = document.getElementById("question-box");
  const resultBox = document.getElementById("result-js");
  const answerOption = document.getElementById("answers-js");
  const questionText = document.getElementById("questions-js");
  const optionsBox = document.getElementById("options-js");
  const timerText = document.getElementById("seconds");
  const scoreText = document.getElementById("score-js");
  const restartButton = document.getElementById("restart-js");

  startButton.addEventListener("click", () => {
    startBox.classList.add("hide");
    questionBox.classList.remove("hide");
    showQuestion();
    startTimer();
  });

  function showQuestion() {
    let currentQuestion = questions[currentindex];
    questionText.innerText = currentQuestion.questions;

    answerOption.innerHTML = "";

    currentQuestion.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.innerText = option;
      optionButton.classList.add("opt-button");
      optionButton.addEventListener("click", () => {
        cheackAnswers(option);
      });
      answerOption.appendChild(optionButton);
    });
  }

  function cheackAnswers(selected) {
    let current = questions[currentindex];

    if (selected === current.answer) {
      score++;
    }

    currentindex++;

    if (currentindex < questions.length) {
      showQuestion();
    } else {
      endQuiz();
    }
  }

  function startTimer() {
    timer = setInterval(() => {
      timeleft--;
      timerText.innerText = timeleft;

      if (timeleft <= 0) {
        endQuiz();
      }
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timer);
    questionBox.classList.add("hide");

    resultBox.classList.remove("hide");
    scoreText.innerText = score;
  }
};

initQuiz();
