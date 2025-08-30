document.getElementById('bmiForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);


  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid positive numbers for weight and height.");
    return;
  }


  const heightInMeters = height / 100; // konversi cm ke m
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(1);


  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = 'Normal Weight';
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }


  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    Your BMI is<strong> ${roundedBMI}</strong>
    which means You are <span style="font-weight: bold; color:rgb(3, 2, 4);">${category}</span>
  `;
  resultDiv.classList.add('show');
});