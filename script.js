document.addEventListener('DOMContentLoaded', () => {
    // Seleziona tutti gli elementi con la classe .anim-entry
    const elements = document.querySelectorAll('.anim-entry');
    
    console.log("Script caricato, inizia l'animazione!");

    // Funzione per verificare la posizione degli elementi durante lo scroll
    function checkScroll() {
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();

            // Se l'elemento è visibile almeno per l'80% nella finestra del browser, attiva l'animazione
            if (rect.top <= windowHeight * 0.8 && rect.bottom >= 0) {
                console.log("Elemento visibile: ", element);
                element.classList.add('show');
            }
        });
    }

    // Controlla subito se qualche sezione è già visibile al caricamento
    checkScroll(); // Verifica la visibilità delle sezioni al caricamento della pagina

    // Ascolta l'evento scroll per attivare l'animazione mentre l'utente scorre
    window.addEventListener('scroll', () => {
        console.log("Scroll detected");
        checkScroll();
    });

    // Gestione del toggle per la descrizione
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const descriptionContent = btn.nextElementSibling;
            descriptionContent.classList.toggle('show');
            const isVisible = descriptionContent.classList.contains('show');
            btn.textContent = isVisible ? 'Nascondi spiegazione' : 'Mostra spiegazione';
        });
    });
});
