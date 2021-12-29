//Seleção de PF/PJ
let selectsTipoCliente = document.querySelectorAll("select[name='tipo']");

selectsTipoCliente.forEach(selectTipoCliente => {
    selectTipoCliente.addEventListener("change", () => {
        if (selectTipoCliente.value == 1) {
            selectTipoCliente.closest("form").querySelector("input[name='cpf']").closest(".group").style.display = 'flex';
            selectTipoCliente.closest("form").querySelector("input[name='cnpj']").closest(".group").style.display = 'none';
        } else if (selectTipoCliente.value == 2) {
            selectTipoCliente.closest("form").querySelector("input[name='cpf']").closest(".group").style.display = 'none';
            selectTipoCliente.closest("form").querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
        } else {
            selectTipoCliente.closest("form").querySelector("input[name='cpf']").closest(".group").style.display = 'flex';
            selectTipoCliente.closest("form").querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
        }
    
        //Ajuste de altura do nav:
        document.querySelector("nav").style.minHeight = (document.querySelector("body").offsetHeight + 1) + "px";
    });
});



//Modais
let modalConfirm   = document.querySelector(".confirmModal");
let modalEditOrNew = document.querySelector(".editOrNewModal");

let btnAddNew  = document.querySelector(".content .addNew");
let btnsDelete = document.querySelectorAll(".data-table table img.delete");
let btnsAlter  = document.querySelectorAll(".data-table table img.alter");

btnAddNew.addEventListener("click", () => {
    
    modalEditOrNew.querySelector(".idfornecedor").closest(".group").style.display = "none";
    modalEditOrNew.querySelector("input[name=id]").value = "";
    modalEditOrNew.querySelector(".btns .btn-standard").value = "Salvar";
    modalEditOrNew.style.display = "flex";

});

btnsDelete.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        
        let idFornecedor       = btn.closest("tr").cells[0].innerHTML;
        let nomeFantFornecedor = btn.closest("tr").cells[2].innerHTML;

        modalConfirm.querySelector(".title-modal").innerHTML = "Deletar Fornecedor";
        modalConfirm.querySelector(".text-modal").innerHTML = `Deseja realmente deletar o(a) fornecedor "${nomeFantFornecedor}" ?`;
        modalConfirm.querySelector(".confirmBtn-modal").innerHTML = "Deletar";

        modalConfirm.querySelector(".id-modal").innerHTML = idFornecedor;
        modalConfirm.querySelector(".nome-modal").innerHTML = nomeFantFornecedor;

        modalConfirm.style.display = 'flex';

    });

});

btnsAlter.forEach((btn) => {

    btn.addEventListener("click", () => {

        modalEditOrNew.querySelector(".idfornecedor").closest(".group").style.display = "initial";
        modalEditOrNew.querySelector(".idfornecedor").innerHTML = "Código: " + btn.closest("tr").cells[0].innerHTML;
        
        modalEditOrNew.querySelector("[name='id']").value                    = btn.closest("tr").cells[0].innerHTML;
        modalEditOrNew.querySelector("[name='nome-razao']").value            = btn.closest("tr").cells[1].innerHTML;
        modalEditOrNew.querySelector("[name='nome-fantasia-apelido']").value = btn.closest("tr").cells[2].innerHTML;
        modalEditOrNew.querySelector("[name='crt']").value                   = btn.closest("tr").cells[3].innerHTML;
        modalEditOrNew.querySelector("[name='tipo']").value                  = btn.closest("tr").cells[4].innerHTML == 'PF' ? 1 : 
                                                                                    btn.closest("tr").cells[4].innerHTML == 'PJ' ? 2 : 0;
        modalEditOrNew.querySelector("[name='rg']").value                    = btn.closest("tr").cells[5].innerHTML;
        modalEditOrNew.querySelector("[name='cpf']").value                   = btn.closest("tr").cells[6].innerHTML;
        modalEditOrNew.querySelector("[name='cnpj']").value                  = btn.closest("tr").cells[7].innerHTML;
        modalEditOrNew.querySelector("[name='contribuinte']").value          = btn.closest("tr").cells[8].innerHTML == 'SIM' ? 1 :
                                                                                    btn.closest("tr").cells[8].innerHTML == 'NÃO' ? 2 : 0;
        modalEditOrNew.querySelector("[name='email']").value              = btn.closest("tr").cells[9].innerHTML;
        modalEditOrNew.querySelector("[name='telefone']").value           = btn.closest("tr").cells[10].innerHTML;
        modalEditOrNew.querySelector("[name='celular']").value            = btn.closest("tr").cells[11].innerHTML;
        modalEditOrNew.querySelector("[name='observacao']").value         = btn.closest("tr").cells[12].innerHTML;
        modalEditOrNew.querySelector("[name='cep']").value                = btn.closest("tr").cells[13].innerHTML;
        modalEditOrNew.querySelector("[name='numero']").value             = btn.closest("tr").cells[14].innerHTML;
        modalEditOrNew.querySelector("[name='endereco']").value           = btn.closest("tr").cells[15].innerHTML;
        modalEditOrNew.querySelector("[name='estado']").value             = btn.closest("tr").cells[16].innerHTML;
        modalEditOrNew.querySelector("[name='cidade']").value             = btn.closest("tr").cells[17].innerHTML;
        modalEditOrNew.querySelector("[name='bairro']").value             = btn.closest("tr").cells[18].innerHTML;
        modalEditOrNew.querySelector("[name='pais']").value               = btn.closest("tr").cells[19].innerHTML;

        if (modalEditOrNew.querySelector("[name='tipo']").value == 1) {
            modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'flex';
            modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'none';
        } else if (modalEditOrNew.querySelector("[name='tipo']").value == 2) {
            modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'none';
            modalEditOrNew.querySelector("input[name='cnpj']").closest(".group").style.display = 'flex';
        } else {
            modalEditOrNew.querySelector("input[name='cpf']").closest(".group").style.display  = 'flex';
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
}



//Search
document.querySelector(".search form .btns input[name='gerar-relatorio']").addEventListener("click", () => {
    document.querySelector(".search form input[name='report-mode']").value = true;
    document.querySelector(".search form").submit();
});

document.querySelector(".search form .btns input[name='buscar']").addEventListener("click", () => {
    document.querySelector(".search form input[name='report-mode']").value = false;
    document.querySelector(".search form").submit();
});