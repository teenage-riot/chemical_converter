const btn = document.querySelector('.btn');
const input = document.getElementById('input-from');
const chooseSubst = document.getElementById('choose-subst');
const molarMassInput = document.getElementById('molar-mass');
const resultLabel = document.getElementById('result-label');
const niceDayHeader = document.getElementById('have-a-nice-day');

chooseSubst.addEventListener('change', function() {
  var molarMass;
  if (chooseSubst.value == 'lithium') {
    molarMass = 6.941;
  } else if (chooseSubst.value === 'hydrogen') {
    molarMass = 1.00784;
  } else if (chooseSubst.value === 'carbon') {
    molarMass = 12.011;
  } else if (chooseSubst.value === 'nitrogen') {
    molarMass = 14.0067;
  } else if (chooseSubst.value === 'oxygen') {
    molarMass = 15.999;
  } else if (chooseSubst.value === 'fluorine') {
    molarMass = 18.998403;
  } else if (chooseSubst.value === 'sodium') {
    molarMass = 22.989769;
  } else if (chooseSubst.value === 'magnesium') {
    molarMass = 24.305;
  } else if (chooseSubst.value === 'aluminium') {
    molarMass = 26.981539;
  } else if (chooseSubst.value === 'silicon') {
    molarMass = 28.0855;
  } else {
    molarMass = 1;
  }

  molarMassInput.value = molarMass;
})

molarMassInput.addEventListener("input", function() {
  chooseSubst.value = 'smth-else';
})

btn.addEventListener('click', function () {
  const inputValue = parseFloat(input.value);
  
  
  molarMass = molarMassInput.value;

  // Конвертируем значение из мкг/мл в ммоль/л
  const grammToLiter = inputValue / 1000;
  const molToLiter = grammToLiter / molarMass;
  const molToMl = molToLiter * 1000;

  // Выводим результат конвертации на страницу
  resultLabel.textContent = `${inputValue} мкг/мл ≈ ${molToMl.toFixed(3)} ммоль/л`;
  niceDayHeader.textContent = '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Хорошего дня!';
});
