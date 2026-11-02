// exams/G9-MATHS-U1-2019.js
(function () {
  window.KEYRA_EXAMS = window.KEYRA_EXAMS || {};

  window.KEYRA_EXAMS["G9-MATHS-U1-2019"] = {
    examCode: "G9-MATHS-U1-2019",
    title: "Mathematics Unit 1",
    grade: 9,
    durationMin: 5, // Daqiiqaa 5 (Fakkeenyaaf)
    passMark: 50,   // Pass mark 50%
    questions: [
      {
        id: "q1",
        text: "What is the value of 2 + 3 × 4?",
        options: ["20", "14", "24", "10"],
        correct: 1, // Index 1 = "14"
        explanation: "Multiplication before addition: 3 × 4 = 12, then 2 + 12 = 14."
      },
      {
        id: "q2",
        text: "Every prime number is odd.",
        options: ["True", "False"],
        correct: 1, // Index 1 = "False"
        explanation: "2 is a prime number and it is even."
      },
      {
        id: "q3",
        text: "The square root of 144 is:",
        options: ["10", "12", "14", "16"],
        correct: 1,
        explanation: "12 × 12 = 144."
      }
    ]
  };
})();