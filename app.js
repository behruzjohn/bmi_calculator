function Check() {
  const Vazn = document.getElementById('Vazn').value;
  const Boy = document.getElementById('Boy').value;
  const result = Vazn / Boy ** 2;
  document.getElementById('result').innerHTML = result;
  if (result < 18.5) {
    alert(`Siz ozg'insiz!`);
  } else if (result > 18.5 && result < 24.9) {
    alert('Normalsiz');
  } else if (result > 25 && result < 29.9) {
    alert(`Semizsiz`);
  } else if (result > 30 && result < 34.9) {
    alert(`O'rta Semizsiz`);
    ``;
  } else {
    alert(`Juda Semizsiz`);
  }
}
