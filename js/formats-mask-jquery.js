jQuery(function () {
    $("[data-format-mask='rg']").mask("00.000.000-00");
    $("[data-format-mask='cpf']").mask("000.000.000-00");
    $("[data-format-mask='cnpj']").mask("00.000.000/0000-00");
    $("[data-format-mask='phone']").mask("(00)00000-0000");
    $("[data-format-mask='cellphone']").mask("(00)0000-0000");
    $("[data-format-mask='cep']").mask("00000-000");
    $("[data-format-mask='number-int']").mask("#");
    $("[data-format-mask='money']").mask("#.##0,00", {reverse: true});
    $("[data-format-mask='percent']").mask("#.##0,00%", {reverse: true});
});