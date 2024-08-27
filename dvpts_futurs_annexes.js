document.getElementById('inscription').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Vérification des champs
    let prenom = document.getElementById('prenom').value;
    let nom = document.getElementById('nom').value;
    let email = document.getElementById('email').value;

    if(prenom && nom && email) {
        // Envoi des données via AJAX
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "process_form.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert("Votre message a bien été envoyé !");
            }
        };
        xhr.send("prenom=" + prenom + "&nom=" + nom + "&email=" + email);
    } else {
        alert("Veuillez remplir tous les champs obligatoires.");
    }
});
