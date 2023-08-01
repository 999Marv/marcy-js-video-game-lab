let square = document.getElementById('square');
console.log(square.style.left, square.style.top);

document.addEventListener('keydown', function (e) {
  let x = parseInt(square.style.left);
  let y = parseInt(square.style.top);

  if (e.key === 'ArrowLeft') {
    square.style.left = `${x - 10}px`;
  } else if (e.key === 'ArrowRight') {
    square.style.left = `${x + 10}px`;
  } else if (e.key === 'ArrowUp') {
    square.style.top = `${y - 10}px`;
  } else if (e.key === 'ArrowDown') {
    square.style.top = `${y + 10}px`;
  }
});
