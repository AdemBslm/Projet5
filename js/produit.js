//Je récupére l'URL
let str = window.location.href
let url = new URL(str)
let search_params = new URLSearchParams(url.search); 
// Fin de la récuperation de l'URL

let produit = document.getElementById("produit_teddies")

let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.response);
        produit.innerHTML = '<img src="' + response.imageUrl + '" alt="ours en peluche"/><div id="texte_section"><h2>' + response.name + '</h2><p id="decription"> Description: ' + response.description + '</p><p>Choisissez une couleur : <select name="color" id="couleur"></select></p><p> Prix: ' + (response.price)/100 + '€</p><div id="liens_produit"><a href="../index.html" title="retour vers la page principal" class="liens"><button><i class="fas fa-arrow-left"></i> Retour </button></a><button id="add_panier">Ajouter au panier</button></div></div>'
        let couleur = document.getElementById('couleur')
        for(i = 0; i < response.colors.length; i++) {
            let newOption = document.createElement("option");
            couleur.appendChild(newOption)
            newOption.setAttribute("id", "option__" + i);
            let option = document.getElementById("option__" + i)
            option.innerHTML = response.colors[i]
        }

        let addPanier = document.getElementById('add_panier')
        console.log(addPanier)

        addPanier.addEventListener("click", function(){
            let value = localStorage.getItem(id)
            console.log(value)
            if(value == null) {
                localStorage.setItem(id,1)
            } else {
                value++
                localStorage.setItem(id,value)
            }
            if(window.confirm("Voulez-vous accéder au panier ?")){
                window.location.href = "panier.html"
            }
            console.log(localStorage)
        })
    }
}

let id = search_params.get('id')
if(search_params.has('id')){
    request.open("GET", "http://localhost:3000/api/teddies/"+ id);
    request.send();
} else {
    window.location.href = '../index.html';
}

