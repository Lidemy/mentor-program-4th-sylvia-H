/* eslint-disable no-restricted-syntax */
let dataTarget = 0;
const changeTime = 3000;
const slidesCount = document.querySelector('.slides').childElementCount;
const indicators = document.querySelector('.indicators').children;
const slideItem = document.querySelectorAll('.item');

function changeSlide() {
  dataTarget += 1;

  if (dataTarget < 0) {
    dataTarget = slidesCount - 1;
  } else if (dataTarget > slidesCount - 1) {
    dataTarget = 0;
  }

  for (const item of slideItem) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  }

  for (const indicator of indicators) {
    if (indicator.classList.contains('active')) {
      indicator.classList.remove('active');
    }
  }

  indicators[dataTarget].classList.add('active');
  slideItem[dataTarget].classList.add('active');
}

let timer = setInterval(changeSlide, changeTime);

document.querySelector('.carousel').addEventListener('click', (e) => {
  if (e.target.classList.contains('control__left')) {
    dataTarget -= 1;
  } else if (e.target.classList.contains('control__right')) {
    dataTarget += 1;
  } else if (e.target.dataset.target) {
    dataTarget = Number(e.target.dataset.target);
  }

  if (dataTarget < 0) {
    dataTarget = slidesCount - 1;
  } else if (dataTarget > slidesCount - 1) {
    dataTarget = 0;
  }

  for (const item of slideItem) {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    }
  }

  for (const indicator of indicators) {
    if (indicator.classList.contains('active')) {
      indicator.classList.remove('active');
    }
  }

  indicators[dataTarget].classList.add('active');
  slideItem[dataTarget].classList.add('active');

  clearInterval(timer);
  timer = setInterval(changeSlide, changeTime);
});
