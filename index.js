// Message de salutation au survol de Loti dans le banniere de l'accueil
let monImage = document.getElementById("mon-image");

if (monImage) { 
    monImage.addEventListener("mouseover", () => afficherSalutation());
    monImage.addEventListener("mouseout", () => cacherSalutation());
}

function afficherSalutation() {
    //Création du nouveau paragraphe orphelin
    let titreOrphelin = document.createElement("h3");
    titreOrphelin.textContent = "Bonjour mon ami !";
    titreOrphelin.className = "";
    //Sélection du div parent adoptif
    let parentAdoptif = document.getElementById("div-adoptif");
    //Le div parent adopte un nouvel enfant :)
    parentAdoptif.appendChild(titreOrphelin);
}

function cacherSalutation() {
    let parentAdoptif = document.getElementById("div-adoptif");
    let titreOrphelin = parentAdoptif.querySelector("h3");
    //Le div parent supprime l'enfant :(
    parentAdoptif.removeChild(titreOrphelin);
}

// Le nom Loti aggrandi et change la couleur on clique dans le formulaire de la page vie
let monMot = document.getElementById("mot");

if (monMot) {
    monMot.addEventListener("click", () => changerLaClass());
}

function changerLaClass() {monMot.classList.toggle("loti");
};

let imgFun = document.getElementById("img-fun");
if (imgFun) {
    imgFun.addEventListener("click", () => changerLaClassPourAfficher());
}
function changerLaClassPourAfficher(){
    let monDiv = getElementsByClassName ("cache")[0];
    monDiv.classList.toggle("montre");
}