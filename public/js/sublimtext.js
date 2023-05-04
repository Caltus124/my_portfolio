const codeEditor = document.querySelector("#code-editor");
const htmlCode = `<!Doctype html>
<html>
    <head>
        <title>Enzo FONTANA</title>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <header>
        <div class="header2">
            <a href="#" id="change-background">Edit</a>
        </div>
    </header>

    <p>Bienvenue sur mon portfolio ! - Taper <span class="bleu_name">help</span> pour lister les commandes supportées.</p><br>
    <p>66 paquets peuvent être mis à jour.</p>
    <p>24 mises à jour sont des mises à jour de sécurité.</p><br>
    <p id="date"></p>
    <p id="result"></p>

    <label for="terminal"><span class='name_terminal'>user@enzofontana.com</span>:<span class="bleu_name">~</span>$ </label>
    <input type="text" id="terminal" autocomplete="off" >


    </body>
</html>`;

// Initialisation de l'éditeur de code
const initEditor = () => {
  const savedCode = localStorage.getItem("code");
  if (savedCode) {
    codeEditor.value = savedCode;
  } else {
    codeEditor.value = htmlCode;
  }
  codeEditor.addEventListener("input", () => {
    const code = codeEditor.value;
    localStorage.setItem("code", code);
  });
};

initEditor();