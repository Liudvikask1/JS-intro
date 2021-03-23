function bmi(weight, height) {
  
  const bmi = (weight / height ** 2);

  if (bmi <= 18.5) {
    return 'Underweight';
  }
  if (bmi <= 25 ) {
    return 'Normal';
  }
  if (bmi <= 30 ) {
    return 'Overweight';
  }
  if (bmi > 30 ) {
    return 'Obese';
  }

  return bmi
}

  console.log(bmi (70, 1.78));

  