<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $telephone = htmlspecialchars($_POST['Info1']);
    $message = htmlspecialchars($_POST['message']);

    // Connexion à la base de données
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    if ($conn->connect_error) {
        die("Connexion échouée : " . $conn->connect_error);
    }

    $sql = "INSERT INTO utilisateurs (prenom, nom, email, telephone, message)
    VALUES ('$prenom', '$nom', '$email', '$telephone', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Nouvel enregistrement créé avec succès";
        // Envoi de l'email de confirmation
        mail($email, "Confirmation d'inscription", "Merci de vous être inscrit, $prenom !");
    } else {
        echo "Erreur : " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
