res = document.getElementById('reser');
console.log(res.style);
res.addEventListener("click", function() {
    res.innerHTML = "Votre reservation a été prise en compte !";
    res.style.backgroundColor = "green";    
    alert("Votre reservation a été prise en compte !");
    window.location.href = "resto.html";

}
);