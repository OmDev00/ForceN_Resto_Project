com = document.getElementById('com');

com.addEventListener("click", function() {
    com.innerHTML = "Votre commande a été prise en compte !";
    com.style.backgroundColor = "green";    
    alert("Votre commande a été prise en compte !");
    window.location.href = "resto.html";

}
);
