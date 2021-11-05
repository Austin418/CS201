const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(
      `Hello and welcome to my page of fantastic puzzles\nplease add /start to the url to begin`
    );
  } else if (req.url === "/start") {
    res.end(`What studio made The Avengers
    \nEnter your answer after the url in camel case, if it's a number write out the word form, lazy.
    \nWhen i ask you to type something new in the url, delete the old stuff so you just have localhost:3000
    \nthe url should be empty and only show localhost:3000 when you type in the answer
    \nif you ever need a hint, after the topic (the thing after localhost) type '/hint'`);
  }else if (req.url === '/start/hint'){
    res.end("What studio made The Avengers \n Hint: They are rivals of DC'")
  } else if (req.url === "/start/marvel") {
    res.end("correct after local host type '/math'")
  }  else if (req.url === "/math") {
    res.end('What is the equation that returns 1.77245385091')
  }else if (req.url === "/math/hint") {
    res.end('What is the equation that returns 1.77245385091 \n Hint: box tree pie')
  } else if (req.url === "/math/squareRootOfPi") {
    res.end("nice, next type /art after local host");
  } else if (req.url === "/art") {
    res.end(`Who painted the mona lisa`)
  } else if (req.url === "/art/hint") {
    res.end(`Who painted the mona lisa \n Hint: firstnameLaStname`)
  } else if (req.url === "/art/leonardoDaVinci") {
    res.end(`great next type /myth`)
  } else if (req.url === "/myth") {
    res.end(`Who is the god of the sea in roman mythos?`)
  } else if(req.url === "/myth/hint"){
    res.end('Who is the god of the sea in roman mythos? \n Hint: 8th planet from the sun')
  } else if (req.url === "/myth/neptune") {
    res.end(`awesome now type /trivia`)
  } else if(req.url === '/trivia'){
    res.end(`how many letters are in the alphabet`)
  } else if (req.url === "/trivia/hint") {
    res.end(`how many letters are in the alphabet, numerical form \n Hint: No, you don't get this one. Shame on you`)
  } else if (req.url === "/trivia/twentySeven") {
    res.end(`perfect now type /biblical`)
  } else if (req.url === "/biblical"){
    res.end("What are the first three words in the old testament ")
  } else if (req.url === "/biblical/hint") {
    res.end("What are the first three words in the old testament \n Hint: 'at the start' there was nothing ")
  } else if (req.url === "/biblical/inTheBeginning") {
    res.end(`Congrats now type the first word that was on the first page`)
  } else if (req.url === "/what") {
    res.end("wow, your good, well, thats all I have for you \n i suppose you can leave now")
  } else if (req.url === "/what/no") {
    res.end("well ok then would you like to join me in the secret society?")
  } else if (req.url === "/what/no/yes") {
    res.end("Amazing i knew you were the one  ")
  } else {
    res.end(`
          <h1> you have failed. Go home kid </h1>
          `);
  }
});

server.listen(3000);
