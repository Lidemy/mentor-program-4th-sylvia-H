/* eslint-disable no-alert */
/* eslint-disable no-continue */
/* eslint-disable no-restricted-syntax */
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const elements = document.querySelectorAll('.required');
  let hasErr = false;
  const values = {};
  for (const el of elements) {
    const textInputs = el.querySelector('input[type=text]');
    const radioInputs = el.querySelectorAll('input[type=radio]');
    let isvalid = true;

    if (textInputs) {
      values[textInputs.name] = textInputs.value;
      if (!textInputs.value) {
        isvalid = false;
      }
    } else if (radioInputs.length) {
      // 用 some() 判斷是否有元素符合判斷式
      isvalid = [...radioInputs].some(radio => radio.checked);
      if (isvalid) {
        const radioCheck = el.querySelector('input[type=radio]:checked');
        values[radioCheck.name] = radioCheck.value;
      }
    } else {
      continue;
    }

    if (!isvalid) {
      el.classList.remove('hide-err');
      hasErr = true;
    } else {
      el.classList.add('hide-err');
    }
  }

  if (!hasErr) {
    const items = document.querySelectorAll('.form__items');
    for (const item of items) {
      if (!item.classList.contains('required')) {
        const textInputs = item.querySelector('input[type=text]');
        const radioInputs = item.querySelectorAll('input[type=radio]');
        if (textInputs) {
          values[textInputs.name] = textInputs.value;
        } else if (radioInputs.length) {
          const radio = [...radioInputs].some(radios => radios.checked);
          if (radio) {
            const radioCheck = item.querySelector('input[type=radio]:checked');
            values[radioCheck.name] = radioCheck.value;
          }
        } else {
          continue;
        }
      }
    }
    alert(JSON.stringify(values));
  }
});
