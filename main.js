let teddies = document.getElementsByClassName("teddies");

//Je fais ma requête afin de récupérer le tableau contenant les différentes valeurs des produits.
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.response);
        //La boucle for me permet d'incrémenter les données a chaque balise section de mon HTML.
        for (let i = 0; i < 5; i++ ) {
            teddies[i].innerHTML = 
                '<img src="' + response[i].imageUrl + '" alt="ours en peluche"/><div id="texte_section"><h2>' + response[i].name + '</h2><p> Description: ' + response[i].description + '</p><p> Prix: ' + (response[i].price)/100 + '€</p><a href="html/produit.html" title="lien vers la page du produit" class="liens">Voir le produit</a></div>'
        };
    };
};

request.open("GET", "http://localhost:3000/api/teddies", true);
request.send();


/*
let liens = document.getElementsByClassName("liens");
let produit = document.getElementsByClassName("produit");

liens.addEventListener("click", function () {
    let request = new XMLHttpRequest();
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.response);
        console.log(reponse)
        produit.innerHTML = '<img src="' + response.imageUrl + '"/><h2>' + response.name + '</h2>'

    }
    request.open("GET", "http://localhost:3000/api/teddies", true);
    request.send();
})
*/



















