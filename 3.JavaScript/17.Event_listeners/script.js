const bhagavadGitaShortQuotes = [
  "Do your duty, without attachment.",
  "Be fearless and pure.",
  "Change is the law of the universe.",
  "You are what you believe in.",
  "The soul is eternal.",
  "Control your mind or it will control you.",
  "Desire is the root of all suffering.",
  "A calm mind brings inner strength.",
  "He who has no attachments can love truly.",
  "Let go of the fruits of your actions.",
  "Stand up and do your duty.",
  "The wise see all beings as equal.",
  "Meditation brings wisdom.",
  "The body is temporary; the soul is eternal.",
  "Anger leads to delusion.",
  "There is neither birth nor death for the soul.",
  "Even a little righteousness saves you from fear.",
  "The mind is everything; what you think, you become.",
  "Devotion is greater than knowledge.",
  "Knowledge purifies the soul.",
  "A yogi is greater than an ascetic.",
  "Happiness comes from within.",
  "The soul cannot be cut or burned.",
  "Perform every action with a heart fixed on God.",
  "Balance is the key to life.",
  "Act without expectation.",
  "Be firm in yoga, O Arjuna.",
  "Faith leads to knowledge.",
  "The Self is never destroyed.",
  "Detach from results, attach to duty.",
  "Let your mind be still.",
  "One who sees action in inaction is wise.",
  "Equanimity is yoga.",
  "Silence is a great strength.",
  "Do not grieve, the soul is eternal.",
  "He who conquers himself is the greatest warrior.",
  "To the self-controlled, peace comes.",
  "The path of light leads to liberation.",
  "Serve with love and devotion.",
  "He who sees Me in everything is never lost.",
  "Renounce all and seek refuge in Me.",
  "Only the ignorant see difference in beings.",
  "Your own duty, done imperfectly, is better.",
  "Those who worship Me live in Me.",
  "Knowledge is the best purifier.",
  "A man is made by his belief.",
  "One who eats moderately lives long.",
  "Neither in this world nor the next is there destruction for the devoted.",
  "Whatever you do, do it as an offering to Me.",
  "Action is superior to inaction.",
];

function generateQuote() {
  const text = document.getElementById("quote");
  const rand = Math.floor(Math.random() * bhagavadGitaShortQuotes.length);
  text.textContent = bhagavadGitaShortQuotes[rand];
}
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // Red
  const g = Math.floor(Math.random() * 256); //
  const b = Math.floor(Math.random() * 256); // Blue
  return `rgb(${r}, ${g}, ${b})`;
}
//   setInterval(() => {
//     generateQuote();
//     document.body.style.background = `linear-gradient(to right, ${getRandomRGB()}, ${getRandomRGB()})`
//   }, 2000);
// const button = document.querySelector("click");
// button.addEventListener("click", function () {
//   generateQuote();
//   document.body.style.background = `linear-gradient(to right, ${getRandomRGB()}, ${getRandomRGB()})`;
// });

// keyboard events

// document.addEventListener("keydown", function (e) {
//     console.log(e)
//   generateQuote();
//   document.body.style.background = `linear-gradient(to right, ${getRandomRGB()}, ${getRandomRGB()})`;
// });
document.addEventListener("keydown", function (e) {
  console.log(e);
//   console.log(e.target)
  console.log(e.type)
  if (e.key == "Enter") {
    generateQuote();
    document.body.style.background = `linear-gradient(to right, ${getRandomRGB()}, ${getRandomRGB()})`;
  }
});
