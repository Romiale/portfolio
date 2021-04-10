//  * Animation au chargement
//  */

(function () {
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
            mirror: false
        });
    });
})()

// let profession = document.getElementById('homes__profession');
// const myProfessions = [' développeur fullstack,', 'UI Designer,', 'UX Designer.'];

// let index1 = 0;
// let index2 = 0;

// window.setInterval(() => {
//     if (index2 == myProfessions[index1].length) {
//         index2 = 0;
//         index1++;

//         profession.textContent = " ";
//         // profession = document.createTextNode(`${''}`);
//     }
//     if (index1 == myProfessions.length) {
//         index1 = 0;
//     }
//     // profession.innerHTML += `${MyProfessions[index1][index2]}`
//     profession.appendChild(document.createTextNode(`${myProfessions[index1][index2]}`))

//     index2++;
// }, 250);

// json profile

window.addEventListener("load", function () {
    fetch("https://6071a85250aaea0017284e71.mockapi.io/donnees/profile")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.getElementById("imgProfile").src = data[0].imgProfile;
            let prenomNom = document.createElement("li");
            prenomNom.innerText = data[0].prenom + ' ' + data[0].nom;
            let profession = document.createElement("li");
            profession.innerText = data[0].profession;
            profession.className = 'text-warning';
            let description = document.createElement("li");
            description.innerText = data[0].Description;
            let profile = document.querySelector(".profile--description");
            profile.prepend(prenomNom, profession, description);

            // icones des reseaux 
            document.querySelector(".profile--techno > a:nth-child(1)").href = data[0].lienReseaux.facebook.lien;
            document.querySelector(".profile--techno > a:nth-child(1)>img").src = data[0].lienReseaux.facebook.adresseImage;

            document.querySelector(".profile--techno > a:nth-child(2)").href = data[0].lienReseaux.twitter.lien;
            document.querySelector(".profile--techno > a:nth-child(2)>img").src = data[0].lienReseaux.twitter.adresseImage;

            document.querySelector(".profile--techno > a:nth-child(3)").href = data[0].lienReseaux.gmail.lien;
            document.querySelector(".profile--techno > a:nth-child(3)>img").src = data[0].lienReseaux.gmail.adresseImage;
            //chargement des projets



        });
});


// ajout d'un message dans le json appartir du formulaire

var formSubmit = document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault()
    const message = {
        nom: document.getElementById('nom').value,
        categorie: document.getElementById('categorie').value,
        pays: document.getElementById('pays').value,
        descriptMessage: document.getElementById('descriptMessage').value,
        email: document.getElementById('email').value
    }
    fetch("https://6071a85250aaea0017284e71.mockapi.io/donnees/message",
        {
            method: "POST",
            body: JSON.stringify(message),
            headers: {
                "Content-Type": "application/json",
            }
        }
    )
    // vider les champs de saisi apres exécution

    function refresh() {

        document.querySelector("#nom").value = "";
        document.querySelector("#categorie").value = "";
        document.querySelector("#pays").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#descriptMessage").value = "";
    }
    refresh();

})