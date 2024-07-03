
    const data = {
      name: $("#nome").val(),
      email: $("#email").val(),
      phone: $("#telefone").val(),
      cep: $("#cep").val(),
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
        alert("Erro ao enviar formulário");
        console.error("Error:", error);
      },
    });;;
