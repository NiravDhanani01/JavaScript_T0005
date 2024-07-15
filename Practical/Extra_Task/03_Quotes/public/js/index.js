async function getQuote() {
    try {
        let response = await fetch("https://type.fit/api/quotes")
        let data = await response.json()
        console.log(data);

        let result = document.querySelector("#result")
        let auth = document.querySelector("#author")
        let id = Math.floor(Math.random() * data.length)

        result.innerHTML = `<q>${data[id].text}</q>`
        auth.innerHTML = `- ${data[id].author}`
        document.querySelector("#card").classList.add('result')
        
    } catch (err) {
        console.log(err);
        return false;
    }
}