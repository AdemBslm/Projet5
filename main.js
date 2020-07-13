let teddies = document.getElementsByClassName("teddies");

//Je fais ma requête afin de récupérer le tableau contenant les différentes valeurs des produits.
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.response);
        console.log(response)
        //La boucle for me permet d'incrémenter les données a chaque balise section de mon HTML.
        for (let i = 0; i < 5; i++ ) {
            teddies[i].innerHTML = '<img src="' + response[i].imageUrl + '" alt="ours en peluche"/><div id="texte_section"><h2>' + response[i].name + '</h2><p> Description: ' + response[i].description + '</p><p> Prix: ' + (response[i].price)/100 + '€</p><a href="html/produit.html?id='+ response[i]._id +'" title="lien vers la page du produit" class="liens"><button>Voir le produit</button></a></div>'
            teddies[i].setAttribute("data-id", response[i]._id)
        };
    };
};

request.open("GET", "http://localhost:3000/api/teddies", true);
request.send();














