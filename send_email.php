<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger datos del formulario
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Dirección de correo electrónico de destino
    $to = 'perez.galicia.adrian589@gmail.com'; // Cambia esto por la dirección de correo real
    $subject = 'Nuevo Mensaje de Contacto';
    $body = "Nombre: $name\nCorreo Electrónico: $email\n\nMensaje:\n$message";

    // Cabeceras
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $body, $headers)) {
        echo 'success';
    } else {
        echo 'error';
    }
}
?>
