var formulario = document.getElementById('formulario');
var anexoI = document.getElementById('anexoIform').innerHTML;
var file = 

function alterAttchementHtml() {
    formulario.innerHTML = "<form action=''><div><label>Faturamento ultimos 12 meses</label><input type='text' name='FatAcumulado'></div><div><label>Vendas</label><input type='text' name='Vendas'></div></form>";
    attachement = 3;
}

function alterAttchementHtml1() {
    formulario.innerHTML = anexoI;
    attachement = 1;
}