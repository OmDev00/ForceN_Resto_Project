com = document.getElementById('com');

com.addEventListener("click", function() {
    com.remove();
    alert("Votre commande a été prise en compte !");
    window.location.href = "resto.html";

}
);
