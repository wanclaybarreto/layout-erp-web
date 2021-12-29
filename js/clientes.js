//Seleção de PF/PJ
let selectsTipoCliente = document.querySelectorAll("select[name='tipo']");

selectsTipoCliente.forEach(selectTipoCliente => {
    selectTipoCliente.addEventListener("change", () => {
        if (selectTipoCliente.value == "PF") {
            selectTipoCliente.closest("form").querySelector("input[name='cpf']").closest(".group").style.display = 'flex';
            selectTipoCliente.closest("form").querySelector("input[name='cnpj']").closest(".group").style.display = 'none';
        } else if (selectTipoCliente.value == "PJ") {
            selectTipoCliente.closest("form").querySelector("input[name='cpf']").closest(".group").style.display = 'none';
            selectTipoCliente.closest("form").querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
        }
    });
});



//Modais
let modalConfirm   = document.querySelector(".confirmModal");
let modalEditOrNew = document.querySelector(".editOrNewModal");

let btnAddNew  = document.querySelector(".content .addNew");
let btnsDelete = document.querySelectorAll(".data-table table img.delete");
let btnsAlter  = document.querySelectorAll(".data-table table img.alter");


btnAddNew.addEventListener("click", () => {
    
    modalEditOrNew.querySelector(".idcliente").closest(".group").style.display = "none";
    modalEditOrNew.querySelector("input[name=id]").value = "";
    modalEditOrNew.querySelector(".btns .btn-standard").value = "Salvar";

    if (modalEditOrNew.querySelector("[name='tipo']").value == "PF") {
        modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'flex';
        modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'none';
    } else if (modalEditOrNew.querySelector("[name='tipo']").value == "PJ") {
        modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'none';
        modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
    }

    modalEditOrNew.style.display = "flex";

});

btnsDelete.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        
        let idCLiente   = btn.closest("tr").cells[0].innerHTML;
        let nomeCliente = btn.closest("tr").cells[1].innerHTML;

        modalConfirm.querySelector(".title-modal").innerHTML = "Deletar Cliente";
        modalConfirm.querySelector(".text-modal").innerHTML = `Deseja realmente deletar o(a) cliente "${nomeCliente}" ?`;
        modalConfirm.querySelector(".confirmBtn-modal").innerHTML = "Deletar";

        modalConfirm.querySelector(".id-modal").innerHTML = idCLiente;
        modalConfirm.querySelector(".nome-modal").innerHTML = nomeCliente;

        modalConfirm.style.display = 'flex';

    });

});

btnsAlter.forEach((btn) => {

    btn.addEventListener("click", () => {

        modalEditOrNew.querySelector(".idcliente").closest(".group").style.display = "initial";
        modalEditOrNew.querySelector(".idcliente").innerHTML = "Código: " + btn.closest("tr").cells[0].innerHTML;
        modalEditOrNew.querySelector("[name='id']").value                 = btn.closest("tr").cells[0].innerHTML;
        modalEditOrNew.querySelector("[name='nome']").value               = btn.closest("tr").cells[1].innerHTML;
        modalEditOrNew.querySelector("[name='nome-fantasia']").value      = btn.closest("tr").cells[2].innerHTML;
        modalEditOrNew.querySelector("[name='sexo']").value               = btn.closest("tr").cells[3].innerHTML;
        modalEditOrNew.querySelector("[name='tipo']").value               = btn.closest("tr").cells[4].innerHTML;
        modalEditOrNew.querySelector("[name='rg']").value                 = btn.closest("tr").cells[5].innerHTML;
        modalEditOrNew.querySelector("[name='cpf']").value                = btn.closest("tr").cells[6].innerHTML;
        modalEditOrNew.querySelector("[name='inscricao-estadual']").value = btn.closest("tr").cells[7].innerHTML;
        modalEditOrNew.querySelector("[name='cnpj']").value               = btn.closest("tr").cells[8].innerHTML;

        let dataNasc = btn.closest("tr").cells[9].innerHTML.split("/");
        modalEditOrNew.querySelector("[name='data-nascimento']").value    = `${dataNasc[2]}-${dataNasc[1]}-${dataNasc[0]}`;

        let dataCad = btn.closest("tr").cells[10].innerHTML.split("/");
        modalEditOrNew.querySelector("[name='data-cadastro']").value      = `${dataCad[2]}-${dataCad[1]}-${dataCad[0]}`;

        modalEditOrNew.querySelector("[name='telefone']").value           = btn.closest("tr").cells[11].innerHTML;
        modalEditOrNew.querySelector("[name='celular']").value            = btn.closest("tr").cells[12].innerHTML;
        modalEditOrNew.querySelector("[name='email']").value              = btn.closest("tr").cells[13].innerHTML;
        modalEditOrNew.querySelector("[name='situacao']").value           = btn.closest("tr").cells[14].innerHTML == 'ATIVO' ? 1 :
                                                                                btn.closest("tr").cells[14].innerHTML == 'BLOQUEADO' ? 2 : 0;
        modalEditOrNew.querySelector("[name='limite-compra']").value      = btn.closest("tr").cells[15].innerHTML;
        modalEditOrNew.querySelector("[name='vende-a-prazo']").value      = btn.closest("tr").cells[16].innerHTML == 'SIM' ? 1 :
                                                                                btn.closest("tr").cells[16].innerHTML == 'NÃO' ? 2 : 0;
        modalEditOrNew.querySelector("[name='observacao']").value         = btn.closest("tr").cells[17].innerHTML;
        modalEditOrNew.querySelector("[name='estado-civil']").value       = btn.closest("tr").cells[18].innerHTML;
        modalEditOrNew.querySelector("[name='conjuge']").value            = btn.closest("tr").cells[19].innerHTML;
        modalEditOrNew.querySelector("[name='pai']").value                = btn.closest("tr").cells[20].innerHTML;
        modalEditOrNew.querySelector("[name='mae']").value                = btn.closest("tr").cells[21].innerHTML;
        modalEditOrNew.querySelector("[name='contador']").value           = btn.closest("tr").cells[22].innerHTML;
        modalEditOrNew.querySelector("[name='rota']").value               = btn.closest("tr").cells[23].innerHTML;
        modalEditOrNew.querySelector("[name='indicador-da-ie']").value    = btn.closest("tr").cells[24].innerHTML;
        modalEditOrNew.querySelector("[name='dias-para-bloqueio']").value = btn.closest("tr").cells[25].innerHTML;
        modalEditOrNew.querySelector(".img-preview img").src              = btn.closest("tr").cells[26].querySelector("img") ?
                                                                                btn.closest("tr").cells[26].querySelector("img").src : '';
        modalEditOrNew.querySelector("[name='cep']").value                = btn.closest("tr").cells[27].innerHTML;
        modalEditOrNew.querySelector("[name='endereco']").value           = btn.closest("tr").cells[28].innerHTML;
        modalEditOrNew.querySelector("[name='numero']").value             = btn.closest("tr").cells[29].innerHTML;
        modalEditOrNew.querySelector("[name='complemento']").value        = btn.closest("tr").cells[30].innerHTML;
        modalEditOrNew.querySelector("[name='estado']").value             = btn.closest("tr").cells[31].innerHTML;
        modalEditOrNew.querySelector("[name='cidade']").value             = btn.closest("tr").cells[32].innerHTML;
        modalEditOrNew.querySelector("[name='bairro']").value             = btn.closest("tr").cells[33].innerHTML;
        modalEditOrNew.querySelector("[name='pais']").value               = btn.closest("tr").cells[34].innerHTML;

        if (modalEditOrNew.querySelector("[name='tipo']").value == "PF") {
            modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'flex';
            modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'none';
        } else if (modalEditOrNew.querySelector("[name='tipo']").value == "PJ") {
            modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'none';
            modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
        }

        modalEditOrNew.querySelector(".btns .btn-standard").value = "Alterar";

        modalEditOrNew.style.display = "flex";

    });

});

modalConfirm.querySelector(".cancelBtn-modal").addEventListener("click", () => {
        modalConfirm.querySelector(".title-modal").innerHTML = "";
        modalConfirm.querySelector(".text-modal").innerHTML = "";
        modalConfirm.querySelector(".confirmBtn-modal").innerHTML = "";

        modalConfirm.querySelector(".id-modal").innerHTML = "";
        modalConfirm.querySelector(".nome-modal").innerHTML = "";

        modalConfirm.style.display = 'none';
});

modalEditOrNew.querySelector(".btns .btn-cancel").addEventListener("click", () => {
    
    clearModalEditOrNew();
    modalEditOrNew.querySelector("form").scrollTop = 0;
    modalEditOrNew.style.display = "none";

});

function clearModalEditOrNew() {
    modalEditOrNew.querySelectorAll(".group input").forEach(input => {
        input.value = "";
    });

    modalEditOrNew.querySelectorAll("select").forEach(select => {
        select.value = select.querySelector("option").value;
    });

    modalEditOrNew.querySelectorAll("textarea").forEach(txtarea => {
        txtarea.value = "";
    });

    modalEditOrNew.querySelector(".img-preview img").src = '';
}

//preview de foto
document.querySelector("input[name='foto']").addEventListener("change", (ev) => {
    
    let file = ev.target.files.item(0);

    let reader = new FileReader();

    reader.onload = e => document.querySelector(".img-preview img").src = e.target.result;

    if (file instanceof Blob) {
        reader.readAsDataURL(file);
    } else {
        document.querySelector(".img-preview img").src = "";
    }

});



//Search
document.querySelector(".search form .btns input[name='gerar-relatorio']").addEventListener("click", () => {
    document.querySelector(".search form input[name='report-mode']").value = true;
    document.querySelector(".search form").submit();
});

document.querySelector(".search form .btns input[name='buscar']").addEventListener("click", () => {
    document.querySelector(".search form input[name='report-mode']").value = false;
    document.querySelector(".search form").submit();
});