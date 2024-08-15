const display = document.querySelector('.display');
let currentValue = '';
let previousValue = '';
let operator = '';

function updateDisplay(value) {
    display.value = value;
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;

        if (buttonText >= '0' && buttonText <= '9') {
            currentValue += buttonText;
            updateDisplay(currentValue);
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            previousValue = currentValue;
            currentValue = '';
            operator = buttonText;
        } else if (buttonText === '=') {
            if (previousValue && currentValue && operator) {
                currentValue = eval(`${previousValue} ${operator} ${currentValue}`);
                updateDisplay(currentValue);
                previousValue = '';
                operator = '';
            }
        } else if (buttonText === 'C') {
            currentValue = '';
            previousValue = '';
            operator = '';
            updateDisplay('');
        } else if (buttonText === 'DEL') {
            currentValue = currentValue.slice(0, -1);
            updateDisplay(currentValue);
        }
    });
});