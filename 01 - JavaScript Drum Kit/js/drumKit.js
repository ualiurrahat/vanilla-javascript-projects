// function to play sound on keyboard button pressed
function playSound(event) {
    // select audio
    const audio = document.querySelector(`audio[data-key = "${event.keyCode}"]`);
    // select key
    const key = document.querySelector(`.key[data-key = "${event.keyCode}"]`);
    // stop the function for pressing button that is not added in the project
    if (!audio) {
      return;
    }
    // rewind to the start
    audio.currentTime = 0;
    // play the audio
    audio.play();
    // add playing class to the key
    key.classList.add("playing");
  }
  // function to remove transition
  function removeTransition(event) {
    // skip it if it's not a transform
    if (event.propertyName !== 'transform') {
      return;
    }
    // remove playing class to end transition
    // this.classList.remove('playing');
    event.target.classList.remove("playing");
  }
  // select all keys
  const keys = document.querySelectorAll(".key");
  // remove transition from all the keys after transition is showed
  keys.forEach(key => addEventListener('transitionend', removeTransition));
  // add event listener to the window
  window.addEventListener('keydown', playSound);