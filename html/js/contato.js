// index.js
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';

document
  .getElementById("cadastroForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    var genero = document.querySelector('input[name="genero"]:checked').value;
    var cep = document.getElementById("cep").value;

    var dadosFormulario = {
      nome: nome,
      email: email,
      telefone: telefone,
      genero: genero,
      cep: cep,
    };

    localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));

    alert("Cadastro feito com sucesso!");
  });

fetch("http://localhost:3005/formData", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dadosFormulario),
});
const p1 = {
  nome: document.getElementById("nome").value,
}
  .then((response) => response.json())
  .then((data) => {});

var xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/formData", true);
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201) {
    // Opcional: mostrar uma mensagem de sucesso
    alert("Dados enviados com sucesso.!");
    console.log(JSON.parse(xhr.responseText));
  } else if (xhr.readyState === 4) {
    console.error("Erro ao enviar dados:", xhr.responseText);
  }
};
xhr.send(JSON.stringify(dadosFormulario));
