function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addItem() {
  const todoText = document.querySelector('.todo-add').value;
  if (!todoText) return;

  const todo = document.createElement('div');
  todo.classList.add('content__todo');
  todo.innerHTML = `
      <input class="btn-check" type="checkbox">
      <div class="todo-text">${escapeHtml(todoText)}</div>
      <label class="btn-del">X</label>
  `;
  document.querySelector('.content__itemArea').appendChild(todo);
  document.querySelector('.todo-add').value = '';
  document.querySelector('.content__itemArea').addEventListener('click', (event) => {
    const { target } = event;
    if (target.classList.contains('btn-del')) {
      target.parentNode.remove();
      return;
    }

    if (target.classList.contains('btn-check')) {
      if (target.checked) {
        target.parentNode.classList.add('todo-done');
      } else {
        target.parentNode.classList.remove('todo-done');
      }
    }
  });
}

document.querySelector('.btn-add').addEventListener('click', addItem);
document.querySelector('.todo-add').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
