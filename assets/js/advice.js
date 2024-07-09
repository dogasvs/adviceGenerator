let advices = [];

function renderAdvice() {
  randomAdvice.innerHTML = 
  `<p> Advice #${advices.slip.id} </p>
    <h1> " ${advices.slip.advice} " </h1>
    <div class="icons">
    <hr>
    <img id="simge" src="assets/img/simge.svg" alt="zar"> 
    <hr>
    </div>
    <button id="btn"> <img src="assets/img/Shape.svg" alt="zar"> </button>`;

    let clickBtn = document.querySelector('#btn');
    clickBtn.addEventListener('click', handleClick);
}

function handleClick() {
  window.location.reload();
}

function init() {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(res => {
      advices = res;
      renderAdvice();
    });
}

init();