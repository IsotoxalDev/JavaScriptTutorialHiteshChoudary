const names = [
  "Amazon",
  "Youtube",
  "Google",
  "Facebook",
  "Instagram",
  "Netflix",
];

// for (const n of names) {
//   console.log(n);
// }

const symbols = {
  yt: "Youtube",
  fb: "Facebook",
  ig: "Instagram",
  lco: "LearnCodeOnline.in",
};

for (const n in symbols) {
  console.log(symbols[n]);
}
