// testando com jquey
$(document).ready(function () {
    $("#cadastroForm").on("submit", function (event) {
        event.preventDefault();

        const data = {
            name: $("#nome").val(),
            email: $("#email").val(),
            phone: $("#telefone").val(),
            cep: $("#cep").val(),
            genero: $('input[name="genero"]:checked').val(),
        };

        $.ajax({
            url: "http://localhost:3000/contacts",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function (response) {

                console.log("Success:", response);
            },
            error: function (error) {
                alert("Erro ao realizar o cadastro.");
                console.error("Error:", error);
            },
        });
    });
});
