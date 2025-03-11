document.addEventListener("DOMContentLoaded", function() {
    // Funzione per gestire l'animazione delle scritte
    function animateText() {
        const headingText = document.querySelector('.italic-text');
        const imageCaption = document.querySelector('.image-caption');
        
        // Aggiungiamo una classe CSS per animare il testo da sinistra a destra
        headingText.classList.add('animate-text');
        imageCaption.classList.add('animate-text');
    }

    // Funzione per gestire l'immagine cliccabile
    function changeImage() {
        // Array di immagini
        const images = [
            "donnyimg/a.jpg",
            "donnyimg/b.jpg",
            "donnyimg/c.jpg",
            "donnyimg/d.jpg",
            "donnyimg/e.jpg"
            // Aggiungi altre immagini se necessario
        ];

        // Seleziona un'immagine casuale
        const randomImage = images[Math.floor(Math.random() * images.length)];

        // Assegna l'immagine casuale all'elemento con id "dynamic-image"
        document.getElementById("dynamic-image").src = randomImage;
    }

    // Funzione per chiudere la sezione precedente e aprire la nuova
    function handleSectionToggle() {
        const puzzleItems = document.querySelectorAll('.puzzle-item');
        
        puzzleItems.forEach(item => {
            const header = item.querySelector('.puzzle-header');
            header.addEventListener('click', function() {
                // Chiudi tutte le altre sezioni
                puzzleItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.querySelector('.puzzle-dropdown').style.display = 'none';
                    }
                });

                // Alterna la visibilità della sezione corrente
                const dropdown = item.querySelector('.puzzle-dropdown');
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                } else {
                    dropdown.style.display = 'block';
                }
            });
        });
    }

    // Esegui la funzione di cambio immagine e animazione del testo al caricamento della pagina
    changeImage();
    animateText();
    handleSectionToggle();
});
