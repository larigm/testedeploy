// pegar dados do form
document.getElementById("cadastroForm").addEventListener("submit", function (event) {
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
// enviando dado e transformando em json
fetch("http://localhost:3000/formData", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dadosFormulario),
});
