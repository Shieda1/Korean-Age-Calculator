// https://www.omnicalculator.com/everyday-life/korean-age

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const koreanageRadio = document.getElementById('koreanageRadio');
const currentyearRadio = document.getElementById('currentyearRadio');
const yearofbirthRadio = document.getElementById('yearofbirthRadio');

let koreanage;
let currentyear = v1;
let yearofbirth = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

koreanageRadio.addEventListener('click', function() {
  variable1.textContent = 'Current year';
  variable2.textContent = 'Year of birth';
  currentyear = v1;
  yearofbirth = v2;
  result.textContent = '';
});

currentyearRadio.addEventListener('click', function() {
  variable1.textContent = 'Korean age';
  variable2.textContent = 'Year of birth';
  koreanage = v1;
  yearofbirth = v2;
  result.textContent = '';
});

yearofbirthRadio.addEventListener('click', function() {
  variable1.textContent = 'Korean age';
  variable2.textContent = 'Current year';
  koreanage = v1;
  currentyear = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(koreanageRadio.checked)
    result.textContent = `Korean age = ${computekoreanage().toFixed(2)}`;

  else if(currentyearRadio.checked)
    result.textContent = `Current year = ${computecurrentyear().toFixed(2)}`;

  else if(yearofbirthRadio.checked)
    result.textContent = `Year of birth = ${computeyearofbirth().toFixed(2)}`;
})

// calculation

// Korean age = (current year - year of birth) + 1

function computekoreanage() {
  return (Number(currentyear.value) - Number(yearofbirth.value)) + 1;
}

function computecurrentyear() {
  return (Number(koreanage.value) - 1) + Number(yearofbirth.value);
}

function computeyearofbirth() {
  return Number(currentyear.value) - (Number(koreanage.value) - 1);
}