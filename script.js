

fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {

        console.log(data)
        //appeler produit
        afficherProduit(data)

    });



//forEach sur la date !!!!!
//fetch("")
//then(reponse => 
//then(data=>)


//role : afficher dans la page web les cartes de produit
//parametre : des produits -> tableau d'objet
//return : rien

//function
function afficherProduit(tableauProduit) {

    //afficher tout les titre des produits
    tableauProduit.forEach(produit => {

        //titre du produit
        let titre = produit.tittle
        console.log(titre)

        //prix du produit
        let prix = produit.price
        console.log(prix)

        //image du produit
        let image = produit.image
        console.log(image)


        //description produit
        let description = produit.description
        console.log(description)

        //categorie du produit 
        let category = produit.category
        console.log(category)

        //categorie du produit 
        let note = produit.rating
        console.log(note)

    });




    //pour chaque produit
    tableauProduit.forEach(produit => {

        //l'afficher dans mon html via ma section et injecter les element dans mon html
        document.getElementById("section1").innerHTML += `
         <div class="flex flexCenter marginTop w-40 color padding border">
            <img src="${produit.image}" alt="" class="w-23">
            <div class="w-48">
            <h2>${produit.title}</h2>
            <p>${produit.category}</p>
            </div>
            <div class="bgBlack">
            <P class="w-23">${produit.price}$</P>
            </div>
            
            
            
        </div>
    `


    })

}