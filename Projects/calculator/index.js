const math = ['0','1','2','3','4','5','6','7','8','9','.','+','-','*','/'];
const operators = ['+','-','*','/'];

const result = document.querySelector(".result");

document.addEventListener("keydown", event => {
  const key = event.key;
  const current = result.innerHTML;
  const lastChar = current.slice(-1);

  // Clear calculator
  if (key === 'Escape' || key.toLowerCase() === 'c') {
    result.innerHTML = '0';
    return;
  }

  // Calculate
  if (key === 'Enter') {
    try {
      const evaluated = eval(current);
      result.innerHTML = evaluated;
    } catch {
      result.innerHTML = 'Error';
    }
    return;
  }

  // Delete last character
  if (key === 'Backspace') {
    result.innerHTML = current.length > 1 ? current.slice(0, -1) : '0';
    return;
  }

  // Ignore invalid keys
  if (!math.includes(key)) return;

  // Prevent multiple operators in a row
  if (operators.includes(key) && operators.includes(lastChar)) return;

  // Append valid input
  if (current === '0' && key !== '.') {
    result.innerHTML = key;
  } else {
    result.innerHTML += key;
  }
});
