document.getElementById('inscription').addEventListener('submit', function(event) {
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;

    if (!prenom || !nom || !email) {
        alert('Tous les champs sont obligatoires !');
        event.preventDefault();
    } else if (!validateEmail(email)) {
        alert('Adresse e-mail invalide !');
        event.preventDefault();
    }
});

function validateEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(String(email).toLowerCase());
}
