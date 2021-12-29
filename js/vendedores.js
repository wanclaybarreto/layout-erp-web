//Modais
let modalConfirm   = document.querySelector(".confirmModal");
let modalEditOrNew = document.querySelector(".editOrNewModal");

let btnAddNew  = document.querySelector(".content .addNew");
let btnsDelete = document.querySelectorAll(".data-table table img.delete");
let btnsAlter  = document.querySelectorAll(".data-table table img.alter");


btnAddNew.addEventListener("click", () => {
    
    modalEditOrNew.querySelector(".idvendedor").closest(".group").style.display = "none";
    modalEditOrNew.querySelector("input[name=id]").value = "";
    modalEditOrNew.querySelector("input[name='senha']").closest(".group").style.display = "flex";
    modalEditOrNew.querySelector("input[name='senha']").disabled = false;
    modalEditOrNew.querySelector("input[name='senha-confirm']").disabled = false;
    modalEditOrNew.querySelector(".btns .btn-standard").value = "Salvar";
    modalEditOrNew.style.display = "flex";

});

btnsDelete.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        
        let idVendedor   = btn.closest("tr").cells[0].innerHTML;
        let nomeVendedor = btn.closest("tr").cells[1].innerHTML;

        modalConfirm.querySelector(".title-modal").innerHTML = "Deletar Vendedor";
        modalConfirm.querySelector(".text-modal").innerHTML = `Deseja realmente deletar o(a) vendedor "${nomeVendedor}" ?`;
        modalConfirm.querySelector(".confirmBtn-modal").innerHTML = "Deletar";

        modalConfirm.querySelector(".id-modal").innerHTML = idVendedor;
        modalConfirm.querySelector(".nome-modal").innerHTML = nomeVendedor;

        modalConfirm.style.display = 'flex';

    });

});

btnsAlter.forEach((btn) => {

    btn.addEventListener("click", () => {

        modalEditOrNew.querySelector(".idvendedor").closest(".group").style.display = "initial";
        modalEditOrNew.querySelector(".idvendedor").innerHTML = "Código: " + btn.closest("tr").cells[0].innerHTML;
        
        modalEditOrNew.querySelector("[name='id']").value       = btn.closest("tr").cells[0].innerHTML;
        modalEditOrNew.querySelector("[name='nome']").value     = btn.closest("tr").cells[1].innerHTML;
        modalEditOrNew.querySelector("[name='comissao']").value = btn.closest("tr").cells[2].innerHTML;

        modalEditOrNew.querySelector("input[name='senha']").closest(".group").style.display = "none";
        modalEditOrNew.querySelector("input[name='senha']").disabled = true;
        modalEditOrNew.querySelector("input[name='senha-confirm']").disabled = true;

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

modalEditOrNew.querySelector(".btns .btn-standard").addEventListener("click", () => {
    
    if (modalEditOrNew.querySelector("input[name='senha']").disabled) {
        let groupSenha = modalEditOrNew.querySelector("input[name='senha']").closest(".group");
        groupSenha.parentNode.removeChild(groupSenha);
    }

    modalEditOrNew.querySelector("form").submit();

});

function clearModalEditOrNew() {
    modalEditOrNew.querySelectorAll(".group input").forEach(input => {
        input.value = "";
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