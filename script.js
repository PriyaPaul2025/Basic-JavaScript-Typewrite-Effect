const typingelement = document.getElementById("typing-text"); //select the particular elementby it's id
const text =
  "Hello my name is Priya Paul, I am currently practicing JavaScript basic functionalities."; //the content we want as typewrite effect
let index = 0; //starts the loop with index value as 0
const interval = setInterval(() => {
  typingelement.textContent += text[index];
  index++;
  //Add the letter one by one in every 100 milisecond

  //when to stop, when the index met the text length(string) it stops the function if not used we will be stuck in infinite loop
  if (index === text.length) {
    clearInterval(interval);
  }
}, 100);
