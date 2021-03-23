/* Repeat graphics */

function repeatWords() {
  for (const div of document.getElementsByClassName('repeat')) {
    div.innerHTML = '';
    const word = div.getAttribute('data-word') + ' ';
    const p = document.createElement('p');
    div.appendChild(p);

    p.innerHTML = word;
    let numWordsAcross = 0;
    const initialHeight = p.offsetHeight;

    while (p.offsetHeight < initialHeight * 2) {
      p.innerHTML += word;
      numWordsAcross += 1;
    }

    p.innerHTML = (word.repeat(numWordsAcross - 1) + '<br/>').repeat(
      Math.min(
        Math.max(Math.floor(window.innerHeight / initialHeight), 17),
        24,
      ),
    );
  }
}

/* Flash */

const flashed = document.getElementById('flash');
function flash() {
  flashed.style.opacity = 1 - flashed.style.opacity;
  requestAnimationFrame(flash);
}

/* Init */

window.addEventListener('load', () => {
  repeatWords();
  requestAnimationFrame(flash);
});
window.addEventListener('resize', repeatWords);
