<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];

    // Sauvegarde des données dans la base de données
    // Connexion à la base de données
    // $conn = new mysqli("host", "username", "password", "database");

    // Insertion des données
    // $sql = "INSERT INTO contacts (prenom, nom, email) VALUES ('$prenom', '$nom', '$email')";
    // if ($conn->query($sql) === TRUE) {
    //     echo "Nouveau contact ajouté avec succès";
    // } else {
    //     echo "Erreur: " . $sql . "<br>" . $conn->error;
    // }

    // $conn->close();
}
?>
