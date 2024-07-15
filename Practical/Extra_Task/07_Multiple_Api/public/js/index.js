const url = [
    "https://type.fit/api/quotes",
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts"
];

function FetchApi() { 
    try {
        let allurl = url.map((item) => {
            return fetch(item).then(response => response.json());
        });

        let demo = document.getElementById("demo");
        Promise.all(allurl)
            .then(data => {
                demo.innerHTML = `
                    <div class="flex">
                        <div class="list">
                            <h1>Quotes</h1>
                            <ul>
                                ${data[0].slice(0,10).map((quote) => `<li>${quote.text}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="list">
                            <h1>Users</h1>
                            <ul>
                                ${data[1].slice(0,10).map((user) => `<li>${user.name}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="list">
                            <h1>Posts</h1>
                            <ul>
                                ${data[2].slice(0,10).map((post) => `<li>${post.title}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            });
    } catch (err) {
        console.log(err.message);
    }
}
