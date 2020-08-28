var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

let changeText = () => {
  followers.innerText = "Followers On Instagram!!";
};

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  } else changeText();
}, 1);
