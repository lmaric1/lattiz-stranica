const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Funkcija za otvaranje i zatvaranje izbornika na mobilnim uređajima
hamburger.addEventListener('click', function() {
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none"; // Sakrij izbornik
        hamburger.classList.remove('open'); // Ukloni klasu za animaciju
    } else {
        navMenu.style.display = "flex"; // Prikaži izbornik
        navMenu.style.flexDirection = "column"; // Postavi stavke u kolonu
        navMenu.style.position = "absolute"; // Pozicioniraj izbornik apsolutno
        navMenu.style.top = "100%"; // Pozicioniraj ispod headera
        navMenu.style.left = "0"; // Poravnaj lijevo
        navMenu.style.right = "0"; // Poravnaj desno
        navMenu.style.background = "rgb(255, 253, 238)"; // Pozadina izbornika
        navMenu.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"; // Dodaj sjenu
        navMenu.style.zIndex = "9"; // Osiguraj da izbornik bude iznad drugih elemenata
        hamburger.classList.add('open'); // Dodaj klasu za animaciju
    }
});

// Funkcija za prilagodbu izbornika prilikom promjene veličine prozora
function handleResize() {
    const width = window.innerWidth;

    if (width <= 768) {
        hamburger.style.display = "flex"; // Prikaži hamburger na manjim ekranima
        if (!hamburger.classList.contains('open')) {
            navMenu.style.display = "none"; // Sakrij izbornik ako nije otvoren
        }
    } else {
        hamburger.style.display = "none"; // Sakrij hamburger na većim ekranima
        navMenu.style.display = "flex"; // Prikaži izbornik na većim ekranima
        navMenu.style.flexDirection = "row"; // Postavi stavke u red
        navMenu.style.position = "static"; // Resetiraj poziciju na desktopu
        navMenu.style.background = "transparent"; // Resetiraj pozadinu na desktopu
        navMenu.style.boxShadow = "none"; // Ukloni sjenu na desktopu
        navMenu.style.zIndex = "auto"; // Resetiraj z-index na desktopu
        hamburger.classList.remove('open'); // Ukloni klasu za animaciju ako je bila aktivna
    }
}

// Dodavanje event listener-a za promjenu veličine prozora
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);
