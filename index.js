let square = document.getElementById('square');
console.log(square.style.left, square.style.top);
const colors = [
  'red',
  'blue',
  'orange',
  'white',
  'yellow',
  'pink',
  'cyan',
  'purple',
  'brown',
  'grey',
  'teal',
];

document.addEventListener('keydown', function (e) {
  let x = parseInt(square.style.left);
  let y = parseInt(square.style.top);

  if (e.key === 'ArrowLeft' && x !== 0) {
    square.style.left = `${x - 10}px`;
  } else if (e.key === 'ArrowRight' && x !== 300) {
    square.style.left = `${x + 10}px`;
  } else if (e.key === 'ArrowUp' && y !== 0) {
    square.style.top = `${y - 10}px`;
  } else if (e.key === 'ArrowDown' && y !== 300) {
    square.style.top = `${y + 10}px`;
  }
  console.log(x, y);
});

square.addEventListener('click', (e) => {
  square.style.backgroundColor =
    colors[Math.floor(Math.random() * colors.length)];
});
