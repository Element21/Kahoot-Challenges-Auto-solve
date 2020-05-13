if (document.location.href.search("kahoot.it/challenge") == -1) {
    throw new Error("You aren't on a kahoot challenge. If you think this is an error please DM Dude803#4472 on discord!")
}
if (!window.KahootAnswerHighlighterExecuted) {
    throw new Error("Already ran kahoot hack!");
}

let oldQuestion = '';
let ID = '';

const autoAnswer = prompt('Enable Answer Bot? (y or n)');

if (autoAnswer.includes('y') || autoAnswer.includes('Y')) {
  console.log('%cKahoot Auto Answer Activated!', 'color: red; font-weight: bold; font-size: 50px;');
  const delay = prompt('Enable answer Delay? (y or n)');

  document.head.insertAdjacentHTML('beforeend', `<style type='text/css'>
  correct-answer-x3Ca8B {
    color: lime !important;
  }
  </style>`);
  ID = document.location.href.slice(document.location.href.search('kahoot.it/challenge') + 20, document.location.href.length);

  // Get the challenge data
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', `https://kahoot.it/rest/challenges/${ID}?includeKahoot=true`, false);
  xhttp.send();
  const QuizData = JSON.parse(xhttp.responseText);
  const Questions = QuizData.kahoot.questions;
  function OnQuestion() {
    for (let i = 0; i < Questions.length; i += 1) {
      for (let x = 0; x < Questions[i].choices.length; x += 1) {
        if (Questions[i].choices[x].correct) {
          const a = document.getElementsByClassName('question-choices__QuestionChoices-vfgbd-0')[0].children;
          for (let y = 0; y < a.length; y += 1) {
            if (a[y].children[1].children[0].innerHTML === Questions[i].choices[x].answer) {
              if (delay.length >= 1) {
                setTimeout(a[y].children[1].children[0].click(), Math.floor(Math.random() * 15) + 1); // Sets delay to a random integer from 1 to 15 and uses it a PRESS delay
              }
              a[y].children[1].children[0].click(); // PRESS Correct answer
            }
          }
        }
      }
    }
  }
  // New Question Detection
  function CheckQuestion() {
    setTimeout(() => {
      if (document.getElementsByClassName('next-button__Button-sc-1wk6ntg-0 gyJMgf button__Button-c6mvr2-0 hotoYM')[0] && delay.length >= 1) { // If the 'next' button exists, PRESS
        setTimeout(document.getElementsByClassName('next-button__Button-sc-1wk6ntg-0 gyJMgf button__Button-c6mvr2-0 hotoYM')[0].click(), Math.floor(Math.random() * 10));
      } else if (document.getElementsByClassName('next-button__Button-sc-1wk6ntg-0 gyJMgf button__Button-c6mvr2-0 hotoYM')[0]) {
        document.getElementsByClassName('next-button__Button-sc-1wk6ntg-0 gyJMgf button__Button-c6mvr2-0 hotoYM')[0].click();
      }

      if (document.getElementsByClassName('scoreboard__Button-ryzpjh-4 iqbnVU button__Button-c6mvr2-0 kiknlR')[0] && delay.length >= 1) { // If the 'next' button to skip the leaderboard exists, PRESS
        setTimeout(document.getElementsByClassName('scoreboard__Button-ryzpjh-4 iqbnVU button__Button-c6mvr2-0 kiknlR')[0].click(), Math.floor(Math.random() * 10));
      } else if (document.getElementsByClassName('scoreboard__Button-ryzpjh-4 iqbnVU button__Button-c6mvr2-0 kiknlR')[0]) {
        document.getElementsByClassName('scoreboard__Button-ryzpjh-4 iqbnVU button__Button-c6mvr2-0 kiknlR')[0].click();
      }

      if (document.getElementsByClassName('gXeTje')[0]) {
        if (document.getElementsByClassName('gXeTje')[0].children[0].children[1].children[0].innerHTML !== oldQuestion) {
          OnQuestion();
          oldQuestion = document.getElementsByClassName('gXeTje')[0].children[0].children[1].children[0].innerHTML;
        }
      }
      CheckQuestion();
    }, 10);
  }
  CheckQuestion();
} else {
  console.log('%cKahoot Highligher Activated!', 'color: red; font-weight: bold; font-size: 50px;');

  document.head.insertAdjacentHTML('beforeend', `<style type="text/css">
correct-answer-x3Ca8B {
  color: lime !important;
}
</style>`);
  ID = document.location.href.slice(document.location.href.search('kahoot.it/challenge') + 20, document.location.href.length);
  // Get the challenge data
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', `https://kahoot.it/rest/challenges/${ID}?includeKahoot=true`, false);
  xhttp.send();
  const QuizData = JSON.parse(xhttp.responseText);
  const Questions = QuizData.kahoot.questions;
  function OnQuestion() {
    for (let i = 0; i < Questions.length; i += 1) {
      for (let x = 0; x < Questions[i].choices.length; x += 1) {
        if (Questions[i].choices[x].correct) {
          const a = document.getElementsByClassName('question-choices__QuestionChoices-vfgbd-0')[0].children;
          for (let y = 0; y < a.length; y += 1) {
            if (a[y].children[1].children[0].innerHTML === Questions[i].choices[x].answer) {
              console.log(a[y].children[1].children[0].innerHTML);
              a[y].children[1].children[0].innerHTML = `<correct-answer-x3Ca8B><u>${a[y].children[1].children[0].innerHTML}</u></correct-answer-x3Ca8B>`;
            }
          }
        }
      }
    }
  }

  // New Question Detection
  oldQuestion = '';
  function CheckQuestion() {
    setTimeout(() => {
      if (document.getElementsByClassName('gXeTje')[0]) {
        if (document.getElementsByClassName('gXeTje')[0].children[0].children[1].children[0].innerHTML !== oldQuestion) {
          OnQuestion();
          oldQuestion = document.getElementsByClassName('gXeTje')[0].children[0].children[1].children[0].innerHTML;
        }
      }
      CheckQuestion();
    }, 10);
  }
  CheckQuestion();
}
