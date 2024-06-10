function generate() {
  let quotes = {
    "― Oscar Wilde": "“Be yourself; everyone else is already taken.”",
    "― Frank Zappa":
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "― Albert Einstein":
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "― Marcus Tullius Cicero":
      "“A room without books is like a body without a soul.”",
    "― Bernard M. Baruch":
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "― William W. Purkey":
      "“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”",
  };

  let autors = Object.keys(quotes);
  let random_numbers = Math.floor(Math.random() * autors.length);

  let autor = autors[random_numbers];
  let quote = Object.values(quotes)[random_numbers];

  document.querySelector("p").textContent = quote;
  document.querySelector("h3").textContent = autor;
}
