async function fetchJoke() {
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();
        
        // Отображаем шутку на странице
        document.getElementById('setup').textContent = joke.setup;
        document.getElementById('punchline').textContent = joke.punchline;
    } catch (error) {
        console.error("Failed to fetch joke:", error);
        document.getElementById('setup').textContent = "Failed to load joke.";
        document.getElementById('punchline').textContent = "";
    }
}
