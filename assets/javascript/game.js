/// Synonym game questions and answers
const questions = [
    {
      question: "Big",
      options: ["Large", "Small", "Tall"],
      answer: "Large"
    },
    {
      question: "Happy",
      options: ["Sad", "Joyful", "Angry"],
      answer: "Joyful"
    },
    {
      question: "Fast",
      options: ["Slow", "Quick", "Swift"],
      answer: "Quick"
    },
    {
      question: "Beautiful",
      options: ["Ugly", "Attractive", "Gorgeous"],
      answer: "Gorgeous"
    },
    {
      question: "Brave",
      options: ["Outrageous", "Valorous", "Courageous"],
      answer: "Courageous"
    },
    {
      question: "Difficult",
      options: ["Versatile", "Particular", "Complex"],
      answer: "Complex"
    },
    {
      question: "Intelligent",
      options: ["Clever", "Quick", "Agile"],
      answer: "Clever"
    },
    {
      question: "Confident",
      options: ["Talkative", "Optimistic", "Insecure"],
      answer: "Optimistic"
    },
    {
      question: "Pleasant",
      options: ["Enjoyable", "Atractive", "Agitated"],
      answer: "Enjoyable"
    },
    {
      question: "Childish",
      options: ["Young", "Immature", "Energetic"],
      answer: "Immature"
    }
  ];
  
/** 
 * Current question index
 * Player score
 * Function to initialize the game
 */

  let score = 0; 
  let currentQuestion = 0; 

  function initializeGame() {
    const menuButtons = document.querySelectorAll("#game-menu button");
    menuButtons.forEach((button) => {
      button.addEventListener("click", handleMenuClick);
    });
  }

/**
 * Function to handle menu button clicks 
 * Show game information
 * Start the synonym game
 * Quit the game
 */ 
function handleMenuClick(event) {
    const button = event.target;
    const dataType = button.getAttribute("data-type");
  
    if (dataType === "game-info") {
      showGameInfo();
    } else if (dataType === "synonym") {
      startSynonymGame();
    } else if (dataType === "quit") {
      quitGame();
    }
  }

/**  
 * Function to show game information
 * Function to start the synonym game
 */ 
  function showGameInfo() {
    const gameArea = document.querySelector("#game-area");
    gameArea.innerHTML = "<h2>Wordventure - Synonym Game</h2><p>Test your knowledge of synonyms by choosing the correct word that has a similar meaning to the given word.</p><br><h2>Game Rules</h2><p>Each question will have three options to choose from.</p><br><p>The player has to answer with the right one in order to have 10 points added to his score, if the player's answer is wrong, then 10 points will be subtracted from the final score.</p><br><p>The game maximum score is 100.</p>";
  }
  
  function startSynonymGame() {
    const gameArea = document.querySelector("#game-area");
    gameArea.innerHTML = `
      <div class="synonym-game">
        <div class="card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="assets/images/WORDVENTURE.png" alt="Wordventure game card back" style="width:500px;height:400px;">
              </div>
              <div class="flip-card-back">
                <h1>Synonym</h1>
                <p>Choose the right answer!</p>
                <div class="question"></div>
                <div class="options"></div>
                <button class="nextButton" onclick="nextQuestion()">Next Question</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    score = 0;
    currentQuestion = 0;
    displayQuestion();
  }

  /**
   * Function to display the current question
   * and check if there are more questions
   * provide the current questions and options
   * update and clear the options element
   * create option buttons for each element
   */
  function displayQuestion() {
    const questionElement = document.querySelector(".question");
    const optionsElement = document.querySelector(".options");
  
    if (currentQuestion >= questions.length) {
      questionElement.textContent = "Game Over!";
      optionsElement.innerHTML = `<p>Final Score: ${score}</p>`;
      return;
    }
  
    const question = questions[currentQuestion];
    const { question: questionText, options, answer } = question;
  
    questionElement.textContent = questionText;

    optionsElement.innerHTML = "";
  
    options.forEach((option) => {
      const button = document.createElement("button");
      button.classList.add("option");
      button.textContent = option;
      button.addEventListener("click", () => checkAnswer(option, answer));
      optionsElement.appendChild(button);
    });
  }

  /**
   * Function to check the selected answer
   * display result and move to the next question
   * quit game function
   */
function checkAnswer(selectedAnswer, correctAnswer) {
    if (selectedAnswer === correctAnswer) {
      score += 10;
      showResult(true);
    } else {
      score -= 10;
      showResult(false);
    }
  }
  
  function showResult(isCorrect) {
    const optionsElement = document.querySelector(".options");
    const buttons = optionsElement.querySelectorAll("button");
  
    buttons.forEach((button) => {
      if (button.textContent === questions[currentQuestion].answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
      button.disabled = true;
    });
  
    currentQuestion++;
    document.querySelector(".nextButton").disabled = false;
  }

  function nextQuestion() {
    const nextButton = document.querySelector(".nextButton");
    nextButton.disabled = true;
    displayQuestion();
  }
  
  function quitGame() {
    const gameArea = document.querySelector("#game-area");
    gameArea.innerHTML = "<h2>Wordventure</h2><p>Thanks for playing!</p>";
  }
  
  // Call the initializeGame function to start the game
  initializeGame();