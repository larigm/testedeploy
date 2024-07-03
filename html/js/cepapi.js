$(document).ready(function() {
// limpando os forms
    function limpa_formulário_cep() {
        $("#rua").val("");
        $("#bairro").val("");
        $("#cidade").val("");
        $("#estado").val("");
    }

    $("#cep").blur(function() {
        var cep = $(this).val().replace(/\D/g, '');
// nao valida se tiver letras
        if (cep != "") {
            var validacep = /^[0-9]{8}$/;
// validando
            if(validacep.test(cep)) {
                $("#rua").val("verificando...");
                $("#bairro").val("verificando...");
                $("#cidade").val("verificando...");
                $("#estado").val("verificando...");
// consultando o ws do via cep e
                $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
// vendo se nao tem erro nos dados
                    if (!("erro" in dados)) {
                        $("#rua").val(dados.logradouro);
                        $("#bairro").val(dados.bairro);
                        $("#cidade").val(dados.localidade);
                        $("#estado").val(dados.uf);
                    }
                    else {
                        // nao achou
                        limpa_formulário_cep();
                        alert("CEP não encontrado. Tente novamente");
                    }
                });
            }
            else {
                // nao validouu

                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        }
        else {
// limpando pra nao ficar em loop
            limpa_formulário_cep();
        }
    });
    });
