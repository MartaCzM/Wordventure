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
    gameArea.innerHTML = "<h2>Wordventure - Synonym Game</h2><p>Test your knowledge of synonyms by choosing the correct word that has a similar meaning to the given word.</p>";
  }
  
  function startSynonymGame() {
    const gameArea = document.querySelector("#game-area");
    gameArea.innerHTML = `
      <div class="synonym-game">
        <div class="card">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="assets/images/WORDVENTURE.png" alt="Wordventure game card back" style="width:300px;height:400px;">
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

  