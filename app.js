const utterance = new SpeechSynthesisUtterance();

utterance.lang = "en-US";

const speak = () => speechSynthesis.speak(utterance);

const stop = () => speechSynthesis.cancel();

const setText = event => utterance.text = event.target.innerText;