function calculateBMI() {
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let showOutput = document.getElementById('output');
    let classification = '';

    let bmiRange = weight / (height / 100) ** 2;
    bmiRange = bmiRange.toFixed(2);

    if (isNaN(bmiRange)) {
        showOutput.innerHTML = 'Invalid input. Please enter valid height and weight.';
        return;
    }

    if (bmiRange < 16) {
        classification = 'Severe Thinness';
    } else if (bmiRange < 17) {
        classification = 'Moderate Thinness';
    } else if (bmiRange < 18.5) {
        classification = 'Mild Thinness';
    } else if (bmiRange < 25) {
        classification = 'Normal';
    } else if (bmiRange < 30) {
        classification = 'Overweight';
    } else if (bmiRange < 34) {
        classification = 'Obese Class I';
    } else if (bmiRange < 40) {
        classification = 'Obese Class II';
    } else {
        classification = 'Obese Class III';
    }
    showOutput.innerHTML = `BMI Range: ${bmiRange} | ${classification} ` ;
    return;
}