let recap = document.getElementById("recap")
let total = 0
let totalResult = document.getElementById("total")

for (let i = 0; i < (localStorage.length); i++) {
    let key = localStorage.key(i)
    if (key != "commande") {
        const getArticle = async function() {
            try {
                let response = await fetch ("http://localhost:3000/api/teddies/"+ key)
                if (response.ok) {
                    let data = await response.json()
                    console.log(data)
                    let newArticle = document.createElement("article")
                    recap.appendChild(newArticle)
                    
                    newArticle.innerHTML = '<img src="' + data.imageUrl + '" alt="ours en peluche"/><h2>' + data.name + '</h2><p> Prix: ' + ((data.price)/100)*localStorage.getItem(key) + '€</p><p id="quantite">Quantité: ' + localStorage.getItem(key) +'</p></article>'
                    total += ((data.price)/100)*localStorage.getItem(key)

                    totalResult.innerHTML = "Total: " + total + "€"
                } else {
                    console.error('retour du serveur : ', response.status)
                }
            } catch(e) {
                console.log(e)
            }
        }
        getArticle()
    } 
}

let commande = document.getElementById("commande")

let newParagraphe = document.createElement("p")
commande.appendChild(newParagraphe)
newParagraphe.innerHTML = localStorage.getItem("commande")

window.addEventListener('unload',function() {
    localStorage.clear()
})