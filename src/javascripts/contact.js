function displayPage() {
  console.log('hello world');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const phoneInput = document.getElementById('phoneInput');
  const radioButtons = document.querySelectorAll('input[name="fav_part"]');
  let favoritePart = null;
  let i = 0;
  while (favoritePart === null) {
    const radioButton = radioButtons[i];
    if (radioButton.checked) {
      favoritePart = radioButton.value;
    }
    i += 1;
  }

  const divRemove = document.querySelector('#contact-section');
  divRemove.innerHTML = '';

  const newInfo = document.getElementById('contact-section');
  const header = document.createElement('h3');
  const p = document.createElement('p');
  const message = `Thanks for submitting ${nameInput.value}!`;
  const message2 = `I will reach out to you soon at ${emailInput.value} or ${phoneInput.value}! `;
  const message3 = `Thanks for liking the ${favoritePart} page on my website.`;

  header.innerHTML = message;
  p.innerHTML = message2 + message3;

  newInfo.appendChild(header);
  newInfo.appendChild(p);
}

const button = document.getElementById('display');
button.onclick = displayPage;
