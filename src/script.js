/* Repeat graphics */

for (const div of document.getElementsByClassName('repeat')) {
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

  p.innerHTML = word.repeat(
    numWordsAcross *
      Math.min(
        Math.max(Math.floor(window.innerHeight / initialHeight), 17),
        24,
      ),
  );
}

/* Google translate graphic */

const { children: gtImages } = document.getElementById('google-translate');
let state = 0;

setInterval(() => {
  if (state > 0) {
    gtImages[state].style.opacity = 1;
  } else {
    gtImages[1].style.opacity = 0;
    gtImages[2].style.opacity = 0;
  }
  state = (state + 1) % 3;
}, 2500);
