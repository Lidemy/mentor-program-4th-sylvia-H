/* eslint-disable no-restricted-syntax */
document.querySelector('.faq__block').addEventListener('click', (e) => {
  const element = e.target.closest('.faq__item');
  if (element) {
    const items = document.querySelectorAll('.faq__item');
    for (const item of items) {
      if (!item.classList.contains('hide-item')) {
        item.classList.add('hide-item');
      }
    }
    element.classList.toggle('hide-item');
  }
});

// 以下是第一次的寫法，含兩個 for loop，看了老師的作業影片後，改成上面的寫法：

// const items = document.querySelectorAll('.faq__item');
// for (const div of items) {
//   div.addEventListener('click', (e) => {
//     for (const item of items) {
//       if (!item.classList.contains('hide-item')) {
//         item.classList.add('hide-item');
//       }
//     }
//     e.currentTarget.classList.toggle('hide-item');
//   });
// }
