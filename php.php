<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $prenom = htmlspecialchars($_POST['prenom']);
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $dateNaissance = htmlspecialchars($_POST['dtJr']) . '/' . htmlspecialchars($_POST['dtMois']) . '/' . htmlspecialchars($_POST['dtAn']);
    $communication = htmlspecialchars($_POST['sexe']);
    $telephone = htmlspecialchars($_POST['Info1']);
    $reseaux = htmlspecialchars($_POST['Info1']);
    $message = htmlspecialchars($_POST['Info1']);
    
    $to = "titan.dasyphol.auteur@outlook.com"; // Remplacez par votre adresse email
    $subject = "Nouveau formulaire rempli";
    $body = "Prénom: $prenom\nNom: $nom\nEmail: $email\nDate de naissance: $dateNaissance\nMode de communication: $communication\nTéléphone: $telephone\nRéseaux sociaux: $reseaux\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Le message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
