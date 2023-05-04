var titleBar = document.getElementById("title-bar");
var exit = document.getElementById("exit");
var max = document.getElementById("maximize");
var min = document.getElementById("minimize");
var logoDescription = document.getElementById("logo-description");

titleBar.addEventListener('mouseover', function handleMouseOver() {
  titleBar.style.cursor = 'context-menu';
});

titleBar.addEventListener('mouseout', function handleMouseOver() {
  titleBar.style.cursor = 'default';
});

//////////////// Make window draggable start ////////////////
// Make the DIV element draggable:
var draggable = $('#window');
var title = $('#title-bar');

title.on('mousedown', function(e){
	var dr = $(draggable).addClass("drag");
	height = dr.outerHeight();
	width = dr.outerWidth();
	ypos = dr.offset().top + height - e.pageY,
	xpos = dr.offset().left + width - e.pageX;
	$(document.body).on('mousemove', function(e){
		var itop = e.pageY + ypos - height;
		var ileft = e.pageX + xpos - width;
		if(dr.hasClass("drag")){
			dr.offset({top: itop,left: ileft});
		}
	}).on('mouseup', function(e){
			dr.removeClass("drag");
	});
});
//////////////// Make window draggable end ////////////////


////////////////// Onclick listeners //////////////////
// X button functionality
$("#exit").click(function(){
    $("#window").css("display", "none");
  });

// Maximize button functionality
$("#maximize").click(enlarge);


function enlarge(){
  if(max.classList.contains("enlarged")){
    $("#window").css("width", "40%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#maximize").removeClass("enlarged");
  }
  else{
    $("#window").css("width", "70%");
    $("#title-bar-width").css('width', '100%').css('width', '+=2px');
    $("#content").css("width", "100%");
    $("#maximize").addClass("enlarged");
  }
}


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

function changeIframeSrc_word(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
  $("#window").css("display", "block");
  logoDescription.innerHTML = "enzo_fontana.txt";
  var iframe = document.getElementById('content');
  iframe.src = "/word";
}

function changeIframeSrc_terminal(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "user@enzofontana.fr";
  var iframe = document.getElementById('content');
  iframe.src = "/terminal";
}

function changeIframeSrc_tryhackme(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "TryHackMe";
  var iframe = document.getElementById('content');
  iframe.src = "https://tryhackme.com/p/Caltus124";
}

function changeIframeSrc_bing(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "Bing";
  var iframe = document.getElementById('content');
  iframe.src = "https://www.bing.com/?cc=fr";
}

function changeIframeSrc_netfliz(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "Netfliz";
  var iframe = document.getElementById('content');
  iframe.src = "http://127.0.0.1/Netfliz/";
}

function changeIframeSrc_cv(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "enzo_fontana_cv.pdf";
  var iframe = document.getElementById('content');
  iframe.src = '../pdf/fontana_enzo_cv.pdf';
}

function changeIframeSrc_osint_avion(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "osint_avion.pdf";
  var iframe = document.getElementById('content');
  iframe.src = '../pdf/WRITE-UP AVION.pdf';
}

function changeIframeSrc_osint_tgv(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "osint_tgv.pdf";
  var iframe = document.getElementById('content');
  iframe.src = '../pdf/WRITE-UP OSINT.pdf';

}

function changeIframeSrc_sublimtext(event) {
  event.preventDefault(); // empêche le comportement par défaut de la balise a
    $("#window").css("display", "block");
  logoDescription.innerHTML = "Sublimtext";
  var iframe = document.getElementById('content');
  iframe.src = "/sublimtext";
}

function changeIframeSrc_projet(event) {
    event.preventDefault(); // empêche le comportement par défaut de la balise a
      $("#window").css("display", "block");
    logoDescription.innerHTML = "Mes projets";
    var iframe = document.getElementById('content');
    iframe.src = "/projets";
  }


function afficherPopup() {
  // Création de la popup
  var popup = window.open("", "popup", "width=700,height=400");

  // Ajout des images dans la popup
  popup.document.write('<img width="100%" src="../images/ubuntu.jpg" onclick="window.opener.changerBackground(\'../images/ubuntu.jpg\')">');
  popup.document.write('<img width="100%" src="../images/ubuntu1.jpg" onclick="window.opener.changerBackground(\'../images/ubuntu1.jpg\')">');
  popup.document.write('<img width="100%" src="../images/ubuntu2.jpg" onclick="window.opener.changerBackground(\'../images/ubuntu2.jpg\')">');
  popup.document.write('<img width="100%" src="../images/ubuntu4.png" onclick="window.opener.changerBackground(\'../images/ubuntu4.png\')">');
  popup.document.write('<img width="100%" src="../images/ubuntu3.jpg" onclick="window.opener.changerBackground(\'../images/ubuntu3.jpg\')">');
  popup.document.write('<img width="100%" src="../images/ubuntu5.jpg" onclick="window.opener.changerBackground(\'../images/ubuntu5.jpg\')">');

  // Ajout de la classe "popup" à la popup
  popup.document.body.classList.add("popup");
}

function changerBackground(image) {
  // Changement du background de la page
  document.body.style.backgroundImage = "url('" + image + "')";
}
