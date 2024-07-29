document.addEventListener('DOMContentLoaded', () => {
    const numbers = document.querySelectorAll('.buttons span[data-numero]');
    const clearButton = document.getElementById('btn-clear');
    const equalsButton = document.getElementById('btn-equals');
    const deleteButton = document.getElementById('btn-delete');
    const screen = document.querySelector('.calculator .screen');

    numbers.forEach(number => {
        number.addEventListener('click', () => {
            const valueButton = number.getAttribute('data-numero');
            if (valueButton.length !== 0) {
                screen.textContent += valueButton;
            }
        });
    });

    clearButton.addEventListener('click', () => {
        screen.textContent = '';
    });

    equalsButton.addEventListener('click', () => {
        try {
            screen.textContent = eval(screen.textContent);
        } catch (e) {
            screen.textContent = 'Error';
        }
    });

    deleteButton.addEventListener('click', () => {
        screen.textContent = screen.textContent.slice(0, -1);
    });
});

