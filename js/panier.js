let panier = document.getElementById("panier")
let total = 0
let totalResult = document.getElementById("total")

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i)
    const getArticle = async function() {
        try {
            let response = await fetch ("http://localhost:3000/api/teddies/"+ key)
            if (response.ok) {
                let data = await response.json()
                console.log(data)
                let newArticle = document.createElement("article")
                panier.appendChild(newArticle)
                
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

function formulaire() {
    let Firstname = document.getElementById("firstName").value
    console.log(typeof Firstname)
    let Lastname = document.getElementById("lastName").value
    console.log(typeof Lastname)
    let Address = document.getElementById("address").value
    console.log(typeof Address)
    let City = document.getElementById("city").value
    console.log(typeof City)
    let Email = document.getElementById("mail").value
    console.log(typeof Email)
    let contact = {
        firstName: Firstname,
        lastName: Lastname,
        address: Address,
        city: City,
        email: Email
    }
    console.log(contact)
    let products = []
    for (i = 0; i < localStorage.length; i++) {    
        let key = localStorage.key(i)
        for (j = 0; j < localStorage.getItem(key); j++) {
            products.push(key)
        }
    }
    console.log(typeof products)
    console.log(products)
    return JSON.stringify({contact,products})
}

let form = document.getElementById("form")

let myInit = { 
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    mode: 'cors',
    body: formulaire()
};

form.addEventListener("submit", function(e) {
    e.preventDefault()
    fetch('http://localhost:3000/api/teddies/order',myInit)
    .then(function(response) {
        alert(response)  
        console.log(response)  
    }) 
})


let effacer = document.getElementById("effacer")

effacer.addEventListener("click", function() {
    localStorage.clear()
    window.location.href = '../index.html';
})