function SubmitString() {
  let str = document.querySelector("#textInput").value.trim();
  let result = document.querySelector("#result")
  let wordFrequency = document.querySelector("#wordFrequency")
  let WorldAveragelength = document.querySelector("#WorldAveragelength")
  let commonWord = document.querySelector('#commonWord')

  if (!str) {
    alert('please Enter A string')
    return
  }
  str.trim()
  result.innerHTML = `<p>Your Sentence :- <b> ${str} </b> </p>`

  let wordFreq = str.split(" ").length
  console.log(str.split(" "));

  wordFrequency.innerHTML = `<p>Word Frequency :-  there are <b> ${wordFreq} </b> Words</p>`

  let wordlength = str.split(" ").map((item) => {
    return item.length
  })
  let totalwordlength = wordlength.reduce((a, b) => {
    return a + b
  })

  let averagelength = totalwordlength / wordlength.length
  WorldAveragelength.innerHTML = `<p>Word Average Length is :- <b> ${(averagelength).toFixed(2)} </b> Words</p>`

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

  let max = 0
  let maxword = ""
  for (let i in common) {
    if (common[i] > max) {
      max = common[i]
      maxword = i
    }
  }
  commonWord.innerHTML = `<p>Most Common word :-  <b> ${maxword} </b> </p>`
  document.querySelector("#textInput").value = ""
}
