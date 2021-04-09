//  * Animation au chargement
//  */

(function() {
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

window.addEventListener("load", function() {
    fetch("http://localhost:3000/profile")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let prenomNom = document.createElement("li");
            prenomNom.innerText = data[0].prenom + ' ' + data[0].nom;
            let profession = document.createElement("li");
            profession.innerText = data[0].profession;
            profession.className = 'text-warning';
            let description = document.createElement("li");
            description.innerText = data[0].Description;
            let profile = document.querySelector(".profile--description");
            profile.prepend(prenomNom, profession, description);


        });
});