function SubmitString() {
  // let str = document.querySelector("#textInput").value
  let str = "document hello world chek hello"
  let result = document.querySelector("#result")
  let wordFrequency = document.querySelector("#wordFrequency")
  let WorldAveragelength = document.querySelector("#WorldAveragelength")
  let wordCount = document.querySelector("#wordCount")
  let commonWord = document.querySelector('#commonWord')
  let regex = /[^a-zA-Z]/gi

  str = str.replace(regex, ' ')

  result.innerHTML = `<p>Your Sentence :- <b> ${str} </b> </p>`

  let wordFreq = str.split(" ").length

  wordFrequency.innerHTML = `<p>Word Frequency :-  there are <b> ${wordFreq} </b> Words</p>`

  let wordlength = str.split(" ").map((item) => {
    return item.length
  })
  let totalwordlength = wordlength.reduce((a, b) => {
    return a + b
  })

  let averagelength = totalwordlength / wordlength.length
  WorldAveragelength.innerHTML = `<p>Word Average Length is :- <b> ${averagelength} </b> Words</p>`

  let common = {}
  let mostCommonWord = str.split(" ")
  for (i = 0; i < mostCommonWord.length; i++) {
    let word = mostCommonWord[i]
    if (common[word] > 0) {
      common[word] = common[word] + 1
    } else {
      common[word] = 1
    }
  }

  // for(let i in common){
  //   wordCount.innerHTML = `<p>word counting :-  there are <b> ${common[i]}  ${i}</b> Words</p>`
  // }


  let max = 0
  let maxword = ""
  for (let i in common) {
    if (common[i] > max) {
      max = common[i]
      maxword = i
    }
  }
  commonWord.innerHTML = `<p>Most Common word :-  <b> ${maxword} </b> </p>`
}
SubmitString()
function SubmitString() {
  let str = document.querySelector("#textInput").value;
  let result = document.querySelector("#result");
  let wordFrequency = document.querySelector("#wordFrequency");
  let WorldAveragelength = document.querySelector("#WorldAveragelength");
  let wordCount = document.querySelector("#wordCount");
  let commonWord = document.querySelector('#commonWord');
  let regex = /[^a-zA-Z\s]/gi;

  str = str.replace(regex, ' ').replace(/\s+/g, ' ').trim();

  result.innerHTML = `<p>Your Sentence :- <b>${str}</b></p>`;

  let words = str.split(" ").filter(word => word.length > 0);
  let wordFreq = words.length;

  wordFrequency.innerHTML = `<p>Word Frequency :- there are <b>${wordFreq}</b> Words</p>`;

  let wordLengths = words.map(item => item.length);
  let totalWordLength = wordLengths.reduce((a, b) => a + b, 0);
  let averageLength = (wordFreq > 0) ? (totalWordLength / wordLengths.length).toFixed(2) : 0;
  
  WorldAveragelength.innerHTML = `<p>Word Average Length is :- <b>${averageLength}</b> Words</p>`;

  let common = {};
  words.forEach(word => {
    common[word] = (common[word] || 0) + 1;
  });

  let wordCountContent = Object.entries(common)
    .map(([word, count]) => `<p>Word count :- there are <b>${count}</b> of <b>${word}</b> Words</p>`)
    .join("");
  wordCount.innerHTML = wordCountContent;

  let max = 0;
  let maxWord = "";
  for (let word in common) {
    if (common[word] > max) {
      max = common[word];
      maxWord = word;
    }
  }
  commonWord.innerHTML = `<p>Most Common word :- <b>${maxWord}</b> </p>`;
}
