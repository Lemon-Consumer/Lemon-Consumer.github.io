const off = document.querySelector("#off");

const turnOff = () => {
  let text = document.querySelectorAll('p', 'li', 'h1');
  if (text.visibility === 'hidden') {
    text.visibility = 'visible';
  } else {
    text.visibility = 'hidden';
  }
}

off.addEventListener('click', turnOff);
