
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "Balancing of multiple mass in single plane the net force and moment should be-",
      answers: {
        a: "Net force &gt; net moment",
        b: "Net force = 0, net moment ≠ 0",
        c: "Net moment &gt; net force",
        d: "Net force = 0, net moment = 0"
      },
      correctAnswer: "d"
    },
    {
      question: "For dynamic balancing of a shaft,",
      answers: {
        a: "the net dynamic force acting on the shaft is equal to zero",
        b: "the net couple due to dynamic forces acting on the shaft is equal to zero",
        c: "both (A) and (B)",
        d: "none of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "A disturbing mass m1 attached to a rotating shaft may be balanced by a single mass m2 attached in same plane of rotation as that of m1 such that",
      answers: {
      a: "m1.r2 = m2.r1",
      b: "m1.r1 = m2.r2",
      c: "m2.m1 = r1.r2",
      d: "none of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "For a balanced system force polygon should exist.",
      answers: {
        a: "false",
        b: "true"
      },
      correctAnswer: "b"
    },
    {
      question: "Four masses m1, m2, m3 and m4 are 200kg, 300kg, 240kg and 260kg respectively. The corresponding radii of rotation are 0.2m, 0.15m, 0.25m and 0.3m respectively and the angles between successive masses are 45°, 75° and 135°.Find the position and magnitude of the balance mass required, if its radius of rotation is 0.2m.",
      answers: {
        a: "116 kg and 201.48°",
        b: "111 kg and 201.48°",
        c: "100 kg and 210.48°",
        d: "116 kg and 210.48°"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
