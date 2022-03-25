const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const mainContent = document.querySelector('.main-content');

function PageTransition() {
  // Button click active class
  for (let i=0; i<sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', () => {
      // change active-btn class
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].classList = currentBtn[0].className.replace(' active-btn', '');
      sectBtn[i].className += ' active-btn';
    });
  }
}

PageTransition();