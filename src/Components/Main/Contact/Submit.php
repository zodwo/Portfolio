<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Formdan gelen verileri alın ve gerektiği gibi temizleyin (güvenlik için)
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $message = htmlspecialchars($_POST["message"]);
    $budget = htmlspecialchars($_POST["budget"]);

    // Alıcı e-posta adresini buraya girin
    $to = "sanan.m@div.edu.az";

    $subject = "Yeni İletişim Formu Gönderildi";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $to\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $email_content = "Adı: $name\n";
    $email_content .= "E-posta: $email\n";
    $email_content .= "Telefon: $phone\n";
    $email_content .= "Mesaj: \n$message\n";
    $email_content .= "Bütçe: $budget\n";

    // E-postayı gönder
    if (mail($to, $subject, $email_content, $headers)) {
        header("Location: tesekkur.html");
        exit();
    } else {
        echo "E-posta gönderiminde bir hata oluştu.";
    }
} else {
    echo "Hatalı istek!";
}
?>