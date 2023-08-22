<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $budget = $_POST["budget"];

    // Alıcı e-posta adresini buraya girin
    $to = "sanan.m@div.edu.az";

    $subject = "Yeni İletişim Formu Gönderildi";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    $email_content = "Adı: $name\n";
    $email_content .= "E-posta: $email\n";
    $email_content .= "Telefon: $phone\n";
    $email_content .= "Mesaj: \n$message\n";
    $email_content .= "Bütçe: $budget\n";

    // E-postayı gönder
    mail($to, $subject, $email_content, $headers);

    // Kullanıcıyı teşekkür sayfasına yönlendir
    header("Location: tesekkur.html");
} else {
    // Hatalı istekleri işlemek için bir şeyler yapabilirsiniz
    echo "Hatalı istek!";
}
?>