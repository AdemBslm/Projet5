let produit = document.getElementsByClassName("teddies");


let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.response);
        for (let i = 0; i < 5; i++ ) {
            console.log(response[i]);
            console.log(response[i].imageUrl);
            produit[i].innerHTML = '<img src="' + response[i].imageUrl + '"/><h2>' + response[i].name + '</h2><p>' + response[i].description + '</p><p>' + (response[i].price)/100 + '€</p><a href="html/produit.html" alt="lien vers le produit">Voir le produit</a>'
        } 
    }
};

request.open("GET", "http://localhost:3000/api/teddies", true);
request.send();




















