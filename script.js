const choices = document.querySelectorAll('.choice');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const winner = getWinner(userChoice, computerChoice);

        userChoiceDisplay.innerHTML = `You chose: ${userChoice}`;
        computerChoiceDisplay.innerHTML = `Computer chose: ${computerChoice}`;
        resultText.innerHTML = `RESULT!!      ${winner}`;
    });
});

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getWinner(user, computer) {
    if (user === computer) return "It's a tie!";
    if ((user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')) {
        return 'You win!';
    }
    return 'Computer wins!';
}
