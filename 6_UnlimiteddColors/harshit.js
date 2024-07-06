const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };
  startButton.addEventListener('click', () => {
    const intervalId = setInterval(() => {
      document.body.style.backgroundColor = randomHexColorCode();
    }, 1000);
    stopButton.addEventListener('click', () => {
      clearInterval(intervalId);
    });
  });
