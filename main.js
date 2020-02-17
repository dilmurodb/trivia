let filmsButton = document.querySelector(".films");
let musicButton = document.querySelector(".music");
let geographyButton = document.querySelector(".geography");
let homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", function() {
  location.reload();
});
filmsButton.addEventListener("click", function filmsTrivia() {
  document.getElementById("background-image").style.backgroundImage =
    "url('https://images.unsplash.com/photo-1542204625-ca960ca44635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')";
  document.getElementById("background-image").style.backgroundSize =
    "100% 100%";
  fetch(
    "https://opentdb.com/api.php?amount=10&category=11&difficulty=medium&type=multiple"
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      let arrayData = myJson.results;
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      for (let k = 0; k < arrayData.length; k++) {
        arrayData[k].incorrect_answers.push(arrayData[k].correct_answer);
        console.log(arrayData[k].incorrect_answers);
        shuffle(arrayData[k].incorrect_answers);
        console.log(arrayData[k].incorrect_answers);
      }
      console.log(arrayData);
      let questionBox = document.querySelector(".question-item");
      let answerA = document.querySelector(".answer-item1");
      let answerB = document.querySelector(".answer-item2");
      let answerC = document.querySelector(".answer-item3");
      let answerD = document.querySelector(".answer-item4");
      let resultsDisplay = document.querySelector(".results-item");
      let startButton = document.querySelector(".start-button");
      let nextButton = document.querySelector(".next-button");
      let i = 1;
      let correctCount = 0;
      startButton.addEventListener("click", function() {
        questionBox.innerText = arrayData[0].question;
        answerA.innerText = arrayData[0].incorrect_answers[0];
        answerB.innerText = arrayData[0].incorrect_answers[1];
        answerC.innerText = arrayData[0].incorrect_answers[2];
        answerD.innerText = arrayData[0].incorrect_answers[3];
      });
      nextButton.addEventListener("click", function() {
        if (i === 10) {
          questionBox.innerText = `Thanks! Your total score is: ${correctCount} out of 10`;
          answerA.innerText = "";
          answerB.innerText = "";
          answerC.innerText = "";
          answerD.innerText = "";
          i = 0;
        } else {
          questionBox.innerText = arrayData[i].question;
          answerA.innerText = arrayData[i].incorrect_answers[0];
          answerB.innerText = arrayData[i].incorrect_answers[1];
          answerC.innerText = arrayData[i].incorrect_answers[2];
          answerD.innerText = arrayData[i].incorrect_answers[3];
        }
        i += 1;
      });
      answerA.addEventListener("click", function() {
        if (answerA.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerB.addEventListener("click", function() {
        if (answerB.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerC.addEventListener("click", function() {
        if (answerC.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerD.addEventListener("click", function() {
        if (answerD.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
        console.log(arrayData[i - 1].correct_answer);
      });
    });
});

musicButton.addEventListener("click", function musicTrivia() {
  document.getElementById("background-image").style.backgroundImage =
    "url('https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80')";
  document.getElementById("background-image").style.backgroundSize =
    "100% 100%";
  fetch(
    "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      let arrayData = myJson.results;
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      for (let k = 0; k < arrayData.length; k++) {
        arrayData[k].incorrect_answers.push(arrayData[k].correct_answer);
        console.log(arrayData[k].incorrect_answers);
        shuffle(arrayData[k].incorrect_answers);
        console.log(arrayData[k].incorrect_answers);
      }
      console.log(arrayData);
      let questionBox = document.querySelector(".question-item");
      let answerA = document.querySelector(".answer-item1");
      let answerB = document.querySelector(".answer-item2");
      let answerC = document.querySelector(".answer-item3");
      let answerD = document.querySelector(".answer-item4");
      let resultsDisplay = document.querySelector(".results-item");
      let startButton = document.querySelector(".start-button");
      let nextButton = document.querySelector(".next-button");
      let i = 1;
      let correctCount = 0;
      startButton.addEventListener("click", function() {
        questionBox.innerText = arrayData[0].question;
        answerA.innerText = arrayData[0].incorrect_answers[0];
        answerB.innerText = arrayData[0].incorrect_answers[1];
        answerC.innerText = arrayData[0].incorrect_answers[2];
        answerD.innerText = arrayData[0].incorrect_answers[3];
      });
      nextButton.addEventListener("click", function() {
        if (i === 10) {
          questionBox.innerText = `Thanks! Your total score is: ${correctCount} out of 10`;
          answerA.innerText = "";
          answerB.innerText = "";
          answerC.innerText = "";
          answerD.innerText = "";
          i = 0;
        } else {
          questionBox.innerText = arrayData[i].question;
          answerA.innerText = arrayData[i].incorrect_answers[0];
          answerB.innerText = arrayData[i].incorrect_answers[1];
          answerC.innerText = arrayData[i].incorrect_answers[2];
          answerD.innerText = arrayData[i].incorrect_answers[3];
        }
        i += 1;
      });
      answerA.addEventListener("click", function() {
        if (answerA.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerB.addEventListener("click", function() {
        if (answerB.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerC.addEventListener("click", function() {
        if (answerC.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerD.addEventListener("click", function() {
        if (answerD.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
        console.log(arrayData[i - 1].correct_answer);
      });
    });
});

geographyButton.addEventListener("click", function geographyTrivia() {
  document.getElementById("background-image").style.backgroundImage =
    "url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1466&q=80')";
  document.getElementById("background-image").style.backgroundSize =
    "100% 100%";
  fetch(
    "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
  )
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      console.log(myJson);
      let arrayData = myJson.results;
      function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
      for (let k = 0; k < arrayData.length; k++) {
        arrayData[k].incorrect_answers.push(arrayData[k].correct_answer);
        console.log(arrayData[k].incorrect_answers);
        shuffle(arrayData[k].incorrect_answers);
        console.log(arrayData[k].incorrect_answers);
      }
      console.log(arrayData);
      let questionBox = document.querySelector(".question-item");
      let answerA = document.querySelector(".answer-item1");
      let answerB = document.querySelector(".answer-item2");
      let answerC = document.querySelector(".answer-item3");
      let answerD = document.querySelector(".answer-item4");
      let resultsDisplay = document.querySelector(".results-item");
      let startButton = document.querySelector(".start-button");
      let nextButton = document.querySelector(".next-button");
      let i = 1;
      let correctCount = 0;
      startButton.addEventListener("click", function() {
        questionBox.innerText = arrayData[0].question;
        answerA.innerText = arrayData[0].incorrect_answers[0];
        answerB.innerText = arrayData[0].incorrect_answers[1];
        answerC.innerText = arrayData[0].incorrect_answers[2];
        answerD.innerText = arrayData[0].incorrect_answers[3];
      });
      nextButton.addEventListener("click", function() {
        if (i === 10) {
          questionBox.innerText = `Thanks! Your total score is: ${correctCount} out of 10`;
          answerA.innerText = "";
          answerB.innerText = "";
          answerC.innerText = "";
          answerD.innerText = "";
          i = 0;
        } else {
          questionBox.innerText = arrayData[i].question;
          answerA.innerText = arrayData[i].incorrect_answers[0];
          answerB.innerText = arrayData[i].incorrect_answers[1];
          answerC.innerText = arrayData[i].incorrect_answers[2];
          answerD.innerText = arrayData[i].incorrect_answers[3];
        }
        i += 1;
      });
      answerA.addEventListener("click", function() {
        if (answerA.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerB.addEventListener("click", function() {
        if (answerB.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerC.addEventListener("click", function() {
        if (answerC.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
      });
      answerD.addEventListener("click", function() {
        if (answerD.innerText === arrayData[i - 1].correct_answer) {
          alert("Yay you are correct!");
          correctCount += 1;
          resultsDisplay.innerText = `Total amount of correct answers: ${correctCount}`;
        } else {
          alert("Sorry try again!");
        }
        console.log(arrayData[i - 1].correct_answer);
      });
    });
});
