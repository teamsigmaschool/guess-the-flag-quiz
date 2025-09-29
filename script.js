function startQuiz() {
  alert('The quiz has started!');

  const guess1 = prompt('What does this ✅ stand for?');
  if (guess1.toLowerCase() === 'tick') {
    alert('You guessed correctly!');
  } else if (guess1.toLowerCase() === 'check') {
    alert("Almost right! But the answer we wanted was 'tick'.");
  } else {
    alert('Sorry, the correct answer was Tick.');
  }

  const guess2 = prompt('What does this 🍉 stand for?');
  if (guess2.toLowerCase() === 'watermelon') {
    alert('You guessed correctly again!');
  } else {
    alert('Sorry, the correct answer was Watermelon.');
  }

  const guess3 = prompt('Is 🧡 an orange heart? (true/false)');
  const isCorrect = guess3.toLowerCase() === 'true';
  if (isCorrect) {
    alert('Correct! 🧡 is an orange heart!');
  } else {
    alert('Nope! It actually is an orange heart.');
  }

  const guess4 = prompt('What does this 🍔 stand for?');
  if (guess4.toLowerCase() === 'burger') {
    alert('Correct! 🍔 is a burger!');
  } else if (guess4.toLowerCase() === 'hamburger') {
    alert('Nice! That’s also correct.');
  } else {
    alert('Nope! The answer was burger.');
  }

  const guess5 = prompt('What does this 😭 stand for?');
  if (guess5.toLowerCase() === 'crying') {
    alert('Yes! 😭 means crying.');
  } else {
    alert('Oops! The correct answer was crying.');
  }
}
