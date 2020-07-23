for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    
    let panier = document.getElementById("panier")
    
    const getArticle = async function() {
        try {
            let response = await fetch ("http://localhost:3000/api/teddies/"+ key)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                let newArticle = document.createElement("article")
                panier.appendChild(newArticle)
                
                newArticle.innerHTML = '<img src="' + data.imageUrl + '" alt="ours en peluche"/><h2>' + data.name + '</h2><p> Prix: ' + ((data.price)/100)*localStorage.getItem(key) + '€</p><p>Quantité: ' + localStorage.getItem(key) +'</p><button class="moins">-</button><button class="plus">+</button></article>'
                newArticle.setAttribute("id", data._id)
            } else {
                console.error('retour du serveur : ', response.status)
            }
        } catch(e) {
            console.log(e)
        }
    }
    getArticle()
}
