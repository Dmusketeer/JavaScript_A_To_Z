// The fetch API is not implemented in Node.
// You need to use an external module for that, like node - fetch.
// Install it in your Node application like this
// npm install node - fetch

async function fetchText() {
    let link = '/mytext.txt'
    try {
        let response = await fetch(link);
        console.log(response.status)
        console.log(response.statusText)
        if (response.status === 200) {
            let data = await response.text()
            console.log(data);
        }
    } catch (e) {
        console.log(e)
    }
}
console.log(fetchText());
