
window.addEventListener('load', calcularTempo)

function calcularTempo(){
    var data = new Date();
    var diaNumero = data.getDay();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    if(hora >= 5 && hora <=18){
        var periodo = '<img src="img/sol.png" height="56px" width="56px">';
    } else{
        var periodo = '<img src="img/lua.png" height="56px" width="56px">';
    }
    var nomesDia = ["Dom","Seg", "Ter" ,"Qua", "Qui", "Sex", "Sab"];

    document.getElementById("dia").innerHTML = nomesDia[diaNumero];
    document.getElementById("hora").innerHTML = ("0" + hora).slice(-2);
    document.getElementById("minuto").innerHTML = ("0" + minuto).slice(-2);
    document.getElementById("periodo").innerHTML = periodo;

    setTimeout(calculateTempo, 200);
}
