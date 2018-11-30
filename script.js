var hdn="";
var action="";
var disp = "";
var result = 0;


function pridetiLentele (hdn, action, disp, result) {
    var table= document.getElementById('lentele');

    table.innerHTML += "<tr>" +
        "<td>hdn</td>" +
        "<td>action</td>" +
        "<td>disp</td>" +
        "<td>result</td>" +
        "</tr>";

}

function handleNumber(num) {
    if (action.length === 0){
        hdn += num;
        document.getElementById("atsakymas").innerHTML = Number(hdn);
    } else {
        disp += num;
        document.getElementById("atsakymas").innerHTML = Number(disp);
    }
}




function handleKabl() {
    hdn+= ".";
    document.getElementById("atsakymas").innerHTML+= ".";

}



function handleAction(op) {
    action+=op;

    document.getElementById("atsakymas").innerHTML= "";
    console.log(action, hdn);


}



//rodo nan//

function handleLygu() {


    if (action === "+") {
        result = Number(hdn) + Number(disp);
        document.getElementById("atsakymas").innerHTML = Number(result);



    } else if (action === "-") {
        result = Number(hdn) - Number(disp);
        document.getElementById("atsakymas").innerHTML = Number(result);

    } else if (action === "*") {
        result = Number(hdn) * Number(disp);
        document.getElementById("atsakymas").innerHTML = Number(result);

    } else if (action ==="/") {
        result = Number(hdn) / Number(disp);
        document.getElementById("atsakymas").innerHTML = Number(result);


    }

    pridetiLentele (hdn, action,disp,result);




    hdn="";
    disp="";
    result=0;
    action="";




}








