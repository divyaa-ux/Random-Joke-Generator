async function getJoke() {

    const joke = document.getElementById("joke");

    joke.innerText = "Loading...";

    try {

        const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
        );

        const data = await response.json();

        joke.innerText =
        data.setup + " 😂 " + data.punchline;

    } catch(error) {

        joke.innerText =
        "Error fetching joke. Try again!";

    }
}
