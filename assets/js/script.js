const inputField = document.getElementById("terminal");
const result = document.getElementById("result");
const date = document.getElementById("date");
date.innerHTML = "Dernière connexion : " + Date();
var count = 0;

var name_cli = "<span class='name_terminal'>" + "user@enzofontana.com" + "</span>" + ":" + "<span class='bleu_name'>" + "~" + "</span>" + "$" +  "<br>"

var commandes = "experience" + "<br>" + "tryhackme" + "<br>" + "about" + "<br>" + "poste" + "<br>" + "osint" + "<br>" + "skills" + "<br>" + "contact" + "<br>" + "cv" + "<br>" +"ls" + "<br>" + "cat" + "<br>"; 

var ls = "<span class='bleu_name'>" + "photos" + "</span>" +  "<br>" + "enzo_fontana_cv.pdf" +  "<br>" + "osint_avion.pdf" + "<br>" + "osint_tgv.pdf" + "<br>"; 

var cv = "Cliquer sur le lien pour télécharger mon cv : " + "<a href='{{ asset('pdf/fontana_enzo_cv.pdf') }}' title='pdf'>" + "<span class='bleu_name'>" + "mon cv" + "</span>" + "</a>";

var osint = "L'OSINT, est tout simplement l'exploitation de sources d'information accessibles par tout le monde (journaux, sites web, conférences…) a des fins de renseignement.";

var about = "👨‍💻 Hey moi c'est Enzo, je suis un jeune étudiant en informatique et je suis passionné de cyber sécurité. Plus tard je veux étre expert en cyber sécurité et travailler dans une blue team." 
+ "<br><br>" + "➡️ Je fais souvent des CTF et j'apprends de jour en jour la Cybersécurité." 
+ "<br>" + "➡️ J'aime faire de l'OSINT et de la GEOINT." 
+ "<br>" + "➡️ Je travaille principalement avec Debian (kali linux) de plus j'ai MacOS, Windows 10 et 11."

var poste_linkedin = "<iframe src='https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7051883699532898304' height='772' width='504' frameborder='0' allowfullscreen='' title='Post intégré'></iframe>"

var contact = "<a href='https://linkedin.com/in/enzo-fontana-epsi'>LinkedIn</a>" 
+ "<br>" + "<a href='https://www.instagram.com/enzo_fta/?hl=fr'>Instagram</a>"
+ "<br>" + "<a href='https://github.com/Caltus124'>Github</a>";


var skills = "Network Security" 
+ "<br>" + "Data Analysis"
+ "<br>" + "Python"
+ "<br>" + "Kali linux"
+ "<br>" + "Cybersécurité"
+ "<br>" + "Test d’intrusion"
+ "<br>" + "Audit"
+ "<br>" + "Administration réseau"
+ "<br>" + "PHP"
+ "<br>" + "Phpmyadmin"
+ "<br>" + "MySQL"
+ "<br>" + "Linux"
+ "<br>" + "HTML"
+ "<br>" + "CSS"
+ "<br>" + "JavaScript"
+ "<br>" + "Nessus"
+ "<br>" + "Windows Server"
+ "<br>" + "ADDC"
+ "<br>" + "BurpSuite"
+ "<br>" + "Wireshark"
+ "<br>" + "Social engineering"
+ "<br>" + "NMAP"
+ "<br>" + "OSINT"
+ "<br>" + "GEOINT"
+ "<br>" + "MacOS"
+ "<br>" + "SQL"
+ "<br>" + "Git"
+ "<br>" + "Firewall"

var tryhackme = "TryHackMe est une plateforme d'apprentissage sur la sécurité informatique disponible uniquement en anglais. Ci-dessous, mon profil tryhackme:" + "<br><br>" 
+ "<a href='https://tryhackme.com/p/Caltus124' target='_blank'><img src='https://tryhackme-badges.s3.amazonaws.com/Caltus124.png' alt='TryHackMe' style='height:100px;''></a>"

var experience = "<h2>Cyber Security Intern</h2>" +
"Airbus OneWeb Satellites · Stage" + "<br>" + 
"janv. 2023 - févr. 2023 · 2 mois" + "<br>" +
"Toulouse, Occitanie, France · Sur site" 
+ "<br><br>" + "》Implémentation de nouvelles politiques de sécurité sur un scanner de vulnérabilité." 
+ "<br>" + "》Développement d'un programme pour analyser des logs" 
+ "<br>" + "》Réalisation de procédures sur des clés USB chiffrées et sur les différents scans de vulnérabilité"
+ "<br>" + "》Réalisation d'un test d'intrusion"
+ "<br>" + "》Réalisation d'un plan d'engagement + d'un rapport test d'intrusion"
+ "<br><br>" + "<h2>Cyber Security Intern</h2>" +
"Airbus OneWeb Satellites · Stage" + "<br>" + 
"avr. 2022 - juil. 2022 · 4 mois" + "<br>" +
"Toulouse, Occitanie, France · Sur site" 
+ "<br><br>" + "》Planifier la mise en place des scans des différentes zones du réseau." 
+ "<br>" + "》Mise en place de scan de vulnérabilité sur l’ensemble de l’architecture." 
+ "<br>" + "》Rédaction d’une procédure de création de scan."
+ "<br>" + "》Rédaction d’une procédure de patch de vulnérabilité."
+ "<br>" + "》En collaboration avec l’IT, patch des failles critiques détectés."
+ "<br>" + "》Gestion de projets."
+ "<br>" + "》Sensibilisation au Bad USB et au phishing BITB."
+ "<br>" + "》Projets cyber."
+ "<br>" + "》Manipulation sur plusieur type de firewall."

window.onload = function() {
    var input = document.getElementById('terminal');
    input.select();
};

window.addEventListener('click',function(){
    var input = document.getElementById('terminal');
    input.select();      
})

function cat(){
    var rdm = Math.floor(Math.random() * 7);

    if (rdm == 0){
        img = "<img src='{{ asset('images/cat.jpg') }}' height='300px'>";
    }else if (rdm == 1){
        img = "<img src='{{ asset('images/cat1.jpeg') }}' height='300px'>";     
    }else if (rdm == 2){
        img = "<img src='{{ asset('images/cat2.jpg') }}' height='300px'>";     
    }else if (rdm == 3){
        img = "<img src='{{ asset('images/cat3.jpeg') }}' height='300px'>";     
    }else if (rdm == 4){
        img = "<img src='{{ asset('images/cat4.jpg') }}' height='300px'>";     
    }else if (rdm == 5){
        img = "<img src='{{ asset('images/cat5.jpg') }}' height='300px'>";     
    }else if (rdm == 6){
        img = "<img src='{{ asset('images/cat6.jpeg') }}' height='300px'>";     
    }else{
        img = "<img src='{{ asset('images/cat6.jpeg') }}' height='300px'>";
    }
    
    

    return img;
}


inputField.addEventListener("keypress", function(event) {
    
    if (event.key === "Enter" || event.keyCode === 13) {
        const inputValue = inputField.value;
        if (inputValue === "help") {
            result.innerHTML = name_cli + commandes + "<br><br>";
        } else if (inputValue === ""){
            result.innerHTML = "";
        } else if (inputValue === "ls"){
            result.innerHTML = name_cli + ls + "<br><br>";
        } else if (inputValue === "cat") {
            result.innerHTML = name_cli + cat() + "<br><br>";
        } else if (inputValue === "osint") {
            result.innerHTML = name_cli + osint + "<br><br>";
        } else if (inputValue === "cv") {
            result.innerHTML = name_cli + cv + "<br><br>";
        }else if (inputValue === "poste") {
            result.innerHTML = name_cli + poste_linkedin + "<br><br>";
        }else if (inputValue === "contact") {
            result.innerHTML = name_cli + contact + "<br><br>";
        }else if (inputValue === "about") {
            result.innerHTML = name_cli + about + "<br><br>";
        }else if (inputValue === "skills") {
            result.innerHTML = name_cli + skills + "<br><br>";
        }else if (inputValue === "tryhackme") {
            result.innerHTML = name_cli + tryhackme + "<br><br>";
        }else if (inputValue === "experience") {
            result.innerHTML = name_cli + experience + "<br><br>";
        }else if (inputValue === "cat password.txt") {
            result.innerHTML = name_cli + "MyP@$$w0rd" + "<br><br>";
        }else {
            result.innerHTML += name_cli + "La commande '" +  inputValue + "' n'éxiste pas !" + "<br><br>";
            count = count + 1;
            console.log(count)
        }

        if (count == 3){
            window.location.reload();
        }

        inputField.value = ""; // Effacer le champ de saisie
        console.log(inputValue);
    }
});

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Récupération de l'élément <a> et ajout d'un gestionnaire d'événement pour le clic
document.getElementById("change-background").addEventListener("click", function(event) {
// Empêche le comportement par défaut de l'événement clic sur l'élément <a>
event.preventDefault();

// Création de la fenêtre popup
var popup = document.createElement("div");
popup.classList.add("popup");

// Ajout de boutons de couleur à la popup
var colors = ["#00FFEC70", "#f1c40f70", "#e74c3c70", "#3498db70", "#8e44ad70", "#2ecc7170", "#3e3d3970"];
for (var i = 0; i < colors.length; i++) {
    var colorButton = document.createElement("button");
    colorButton.style.backgroundColor = colors[i];
    colorButton.addEventListener("click", function() {
    var color = this.style.backgroundColor;
    document.body.style.backgroundColor = color;
    popup.remove();
    });
    popup.appendChild(colorButton);
}

// Ajout d'un bouton pour fermer la popup
var closeButton = document.createElement("button");
closeButton.textContent = "Fermer";
closeButton.addEventListener("click", function() {
    popup.remove();
});
popup.appendChild(closeButton);

// Ajout de la popup à la page
document.body.appendChild(popup);
});

