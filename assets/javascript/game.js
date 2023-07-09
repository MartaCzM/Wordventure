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
  
  let score = 0; // Player score
  let currentQuestion = 0; // Current question index
  
  // Function to initialize the game
  function initializeGame() {
    const menuButtons = document.querySelectorAll("#game-menu button");
    menuButtons.forEach((button) => {
      button.addEventListener("click", handleMenuClick);
    });
  }
