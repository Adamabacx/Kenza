const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const picture = document.getElementById('picture');
const heartContainer = document.getElementById('heartContainer');

let noClicked = false; 

noBtn.addEventListener('click', () => {
  if (!noClicked) {
    message.textContent = "WOWWWW REALLYYY?? 😭 I DARE YOU TO TRY AND CLICK NO AGAIN ";
    picture.src = "Suprised.jpg";
    yesBtn.style.transform = 'scale(1.5)';
    noClicked = true;
  }
});

noBtn.addEventListener('mousemove', () => {
  if (noClicked) {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
  }
});

yesBtn.addEventListener('click', () => {
  message.textContent = "Yay! 💞 I can't wait for what the future holds!";
  picture.src = "Parispic.JPEG";

  function createFloatingEmoji(emoji) {
    const elem = document.createElement('div');
    elem.textContent = emoji;
    elem.classList.add('heart'); 
    elem.style.left = Math.random() * window.innerWidth + 'px';
    elem.style.top = Math.random() * window.innerHeight + 'px';
    elem.style.fontSize = Math.random() * 30 + 20 + 'px';
    elem.style.animationDuration = (Math.random() * 2 + 2) + 's';
    elem.style.transform = `rotate(${Math.random() * 360}deg)`;
    heartContainer.appendChild(elem);
    setTimeout(() => elem.remove(), 3000);
  }

  setInterval(() => {
    createFloatingEmoji('❤️');
    createFloatingEmoji('🌸');
  }, 150);

  yesBtn.style.display = 'none';
  noBtn.style.display = 'none';
});







