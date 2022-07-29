
var ContagemNotas = 0;

var NotaButton = document.querySelector("#Nota-btn");
var MediaButton = document.querySelector("#Media-btn");

var NotasArray = [];


NotaButton.addEventListener("click", () => {

    let ContagemPontoOuVirgula = 0;

    let RawInput  = document.querySelector("#NotaInput").value;

    /* itera por cada char do input e checa se eh valido ou nao */
    /* tbm checa quantas vezes foram inseridos virgula ou ponto */

    let IsValid = true;

    if (RawInput.length == 0){
        alert("Por favor, insira uma nota.");
    }else{
        for (let i=0;i<RawInput.length;i++){

            if (!Number.isInteger(parseInt(RawInput.charAt(i))) && ContagemPontoOuVirgula > 0){
                alert("A nota digitada é inválida, por favor, insira uma nota válida.");
                IsValid = false;
            }else if(!Number.isInteger(parseInt(RawInput.charAt(i))) && ContagemPontoOuVirgula == 0){

                if ((RawInput.charAt(i) == "," || RawInput.charAt(i) == ".") && !i == 0){
                    ContagemPontoOuVirgula = 1;
                }
                else{
                    alert("A nota digitada é inválida, por favor, insira uma nota válida.");
                    IsValid = false;
                }
            }
        }
    }
    
    

    let NotaInputConcertada = RawInput.replace(",",".");

    /* para casos que foram aprovados na primeira checagem, ou seja, sao numericos e possuem no maximo 1 virgula */
    /* ou 1 ponto, checar agr se sao maiores que 10 */

    if (parseFloat(NotaInputConcertada) > 10.0 && IsValid == true){
        alert("A nota digitada é inválida, por favor, insira uma nota válida.");
    }else if (parseFloat(NotaInputConcertada) <= 10.0 && IsValid == true){

        ContagemNotas += 1;

        let NotaInput = (parseFloat(NotaInputConcertada).toFixed(2)).toString();

        let msg = document.createElement('h3');
        msg.innerText = "A nota ".concat(ContagemNotas).concat(" foi ").concat(NotaInput);
    
        const MensagensDiv = document.querySelector('#Mensagens');
        MensagensDiv.append(msg);
    
        NotasArray.push(parseFloat(NotaInput));


    }
    document.querySelector("#NotaInput").value = "";
});





MediaButton.addEventListener("click", () =>{

    let soma = 0;

    for (i in NotasArray){
        soma += NotasArray[i];
    }

    let media = soma/NotasArray.length;

    const MediaH3 = document.querySelector('#Media');
    MediaH3.innerText = MediaH3.innerText.concat(" ").concat(media.toFixed(2).toString());

});
