document.getElementById("submit").addEventListener("click", makePass);
document.getElementById("copy").addEventListener("click", copy);

function makePass() {
    var length = document.getElementById("Slider").value;
    var result           = '';
    var characters = "";

    if(document.getElementById("min").checked){
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (document.getElementById("mai").checked){
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(document.getElementById("num").checked){
        characters += "0123456789";
    }

    if(document.getElementById("num").checked==false && document.getElementById("mai").checked==false && document.getElementById("min").checked==false){
        M.toast({html: 'Você não selecionou nenhuma opção!'})
    }else{

    console.log(characters);

    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    // Esse gerador de strings foi encontrado no stackoverflow
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
 
    var element = document.getElementById("passRow");
    element.classList.remove("hide");
    var element = document.getElementById("copy");
    element.classList.remove("hide");
 
    document.getElementById("passString").value=result;
    }
 }
 
 function copy(){
     var copyText = document.getElementById("passString");
     copyText.select();
     copyText.setSelectionRange(0, 99999);
     document.execCommand("copy");
     M.toast({html: 'O texto foi copiado!'})
 }