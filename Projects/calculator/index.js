const display = document.getElementById('display');
let input = '';

document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => handle(btn.textContent));
});

function handle(value) {
  if (value === 'AC') return clearAll();
  if (value === '⌫') return backspace();
  if (value === '=') return calculate();
  if (value === '√') return squareRoot();
  if (value === '%') return percentage();

  if ('÷×−+'.includes(value)) {
    input += value
      .replace('÷', '/')
      .replace('×', '*')
      .replace('−', '-');
  } else {
    input += value;
  }

  update();
}

function update() {
  display.textContent = input || '0';
}

function clearAll() {
  input = '';
  update();
}

function backspace() {
  input = input.slice(0, -1);
  update();
}

function calculate() {
  try {
    input = eval(input).toString();
    update();
  } catch {
    display.textContent = 'Error';
    input = '';
  }
}

function percentage() {
  try {
    input = (eval(input) / 100).toString();
    update();
  } catch {}
}

function squareRoot() {
  try {
    input = Math.sqrt(eval(input)).toString();
    update();
  } catch {}
}
