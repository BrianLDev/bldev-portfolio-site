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
      currentBtn[0].classList.remove('active-btn');
      sectBtn[i].classList.add('active-btn');
    });
  }

  // make corresponding class active on click
  mainContent.addEventListener('click', (e) => {
    const id =  e.target.dataset.id;  // get data-id from clicked button
    if (id) {

      // hide other sections
      sections.forEach(section => {
        section.classList.remove('active');
      });
      // make current selection active
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

}

PageTransition();