function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convert height to meters
    const bmi = weight / (height * height);
    document.getElementById('result').innerHTML = "Your BMI is: " + bmi.toFixed(2);
}