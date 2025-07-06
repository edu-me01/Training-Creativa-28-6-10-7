const students = [
  { name: "Ahmed", score: 90 },
  { name: "Sara", score: 85 },
  { name: "Mohamed", score: 70 },
  { name: "Ahmed", score: 95 },
  { name: "Ali", score: 60 },
  { name: "Sara", score: 92 },
  { name: "Nada", score: 88 },
  { name: "Ahmed", score: 77 },
  { name: "Ali", score: 83 },
  { name: "Nada", score: 91 },
];

// 1️⃣ filter → الطلاب اللي درجاتهم عالية (أكبر من أو = 85)
const highScorers = students.filter(student => student.score >= 85);
console.log("الطلاب اللي جايبين أكتر من 85:");
console.log(highScorers);

// 2️⃣ reduce → نحسب مجموع درجات كل الطلاب
const totalScore = students.reduce((sum, student) => sum + student.score, 0);
console.log("إجمالي درجات كل الطلاب:", totalScore);

// 3️⃣ map + filter + reduce → درجات شخص معين (مثلاً أحمد)
const nameToFind = "Ahmed";
const ahmedScores = students
  .filter(student => student.name === nameToFind)
  .map(student => student.score);

const ahmedTotal = ahmedScores.reduce((sum, score) => sum + score, 0);
console.log(`إجمالي درجات ${nameToFind}:`, ahmedTotal);