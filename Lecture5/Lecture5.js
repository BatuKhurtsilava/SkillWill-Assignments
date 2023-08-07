//1
const button = document.createElement('button');
const div1 = document.createElement('div');
div1.innerText = 'Click button to dissappear this text';
button.setAttribute('id', 'buttonId');
document.body.append(div1,button);
button.addEventListener('click', function() {
  div1.classList.add('hidden');
});


//2
const div2 = document.createElement('div');
const h2 = document.createElement('h2');
const a = document.createElement('a');
div2.id = 'card';
h2.innerText = 'Gandalf';
a.href = '#';
a.innerText = 'Go to Profile';
div2.append(h2,a);
document.body.append(div2);

//3

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"], // Correct answer: "Paris"
    correctAnswer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"], // Correct answer: "Mars"
    correctAnswer: 1
  },
  {
    question: "What is the largest ocean in the world?",
    options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"], // Correct answer: "Pacific Ocean"
    correctAnswer: 0
  },
  {
    question: "Which country is home to the kangaroo?",
    options: ["Australia", "Brazil", "South Africa", "Canada"], // Correct answer: "Australia"
    correctAnswer: 0
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"], // Correct answer: "Leonardo da Vinci"
    correctAnswer: 1
  }
];

const heading = document.createElement('h2');
heading.innerText = 'Welcome to the QUIZ!';
document.body.append(heading);
for(let i = 0; i < 5; i++) {
  let div = document.createElement('div');
  div.className = 'div';
  div.id = `q${i + 1}div`;
  document.body.appendChild(div);

  let question = document.createElement('h4');
  question.id = `question${i+1}`;
  question.innerText = `Question ${i+1}: ${questions[i].question}`;
  div.append(question);
   
  for(let j = 0; j < 4; j++) {
    let opt = document.createElement('button');
    opt.id = `q${i + 1}opt${j + 1}`;
    opt.innerText = questions[i].options[j];
    div.appendChild(opt);
    if((i === 0 && j === 0) || (i === 1 && j === 1) || (i === 2 && j === 0) || (i === 3 && j === 0) || (i === 4 && j === 1)) {
      opt.classList.add('correct');
    } else{
      opt.classList.add('wrong');
    }
  };
};

const correctAnswer = document.createElement('h3')
let correctAnswerquantity = 0;
correctAnswer.innerText = `Number of correct answers:`;
correctAnswerquantity.innerText = Number(0);
correctAnswer.append(correctAnswerquantity);
document.body.append(correctAnswer);

const renderAnswer = function(divId) {
  let answerSubmitted = 0;
  document.querySelector(divId).addEventListener('click', function(e) {
    console.log(e);
    let selectedButton = e.target;
    while(answerSubmitted === 0) {
    if(e.target.className === 'correct') {
      selectedButton.style.backgroundColor = 'green';
      answerSubmitted++;
      correctAnswerquantity++;
      correctAnswer.innerText = `Number of correct answers: ${correctAnswerquantity}`
    } 
     if(e.target.className === 'wrong') {
      selectedButton.style.backgroundColor = 'red';
      answerSubmitted++;
      
    }
  }
  
   })
}
renderAnswer('#q1div');
renderAnswer('#q2div');
renderAnswer('#q3div');
renderAnswer('#q4div');
renderAnswer('#q5div');

// 4





 

 








