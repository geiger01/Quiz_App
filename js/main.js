var gQuestionNumber = 0;

const gQuestions = [
  {
    id: 1,
    opts: ['3 spiders', 'two puppies', 'A butterfly'],
    correctOptIndes: 1,
  },
  {
    id: 2,
    opts: ['Harry Potter wand', 'A cellphone', 'IceCream'],
    correctOptIndes: 0,
  },
  {
    id: 3,
    opts: ['Javascript', 'Bottle of water', 'Cute cat on a piano'],
    correctOptIndes: 2,
  },
];

function init() {
  reset();
  renderGame(gQuestionNumber);
}

function renderGame(questionNumber) {
  var questHTML = '';
  var imgHTML = '';
  for (var i = 0; i < gQuestions[questionNumber].opts.length; i++) {
    questHTML += `<div class='ques'  onClick="checkQuestion(${i},this)">${gQuestions[questionNumber].opts[i]}!</div>`;
  }

  imgHTML = `<div class="img" style="background-image: url('../imgs/${
    questionNumber + 1
  }.jpg')"></div>`;

  document.querySelector('.questions').innerHTML = questHTML;
  document.querySelector('.container').innerHTML = imgHTML;
}

function checkQuestion(ansIdx, elQuestionH2) {
  //   console.log(index);
  if (gQuestions[gQuestionNumber].correctOptIndes === ansIdx) {
    if (gQuestionNumber < gQuestions.length - 1) {
      gQuestionNumber++;

      elQuestionH2.style.color = 'green'; //settimeout

      renderGame(gQuestionNumber);
    } else {
      elQuestionH2.style.color = 'green';
      document.querySelector('.questions').style.color = 'green';
      document.querySelector('.questions').innerHTML = '<h2>You Won</h2>';
    }

    // console.log(gQuestionNumber);
  } else {
    elQuestionH2.style.color = 'red';
  }
}

function reset() {
  gQuestionNumber = 0;

  document.querySelector('.questions').style.color = 'black';
}
