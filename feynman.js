const speechBubble= document.getElementById('speechBubble');//this variable is used to change the text of a textbubble 

let stage=0;
var form = document.getElementById("formId");
function conversation(){
    
    if (stage<text.length){
    speechBubble.innerHTML=text[stage];
    stage++;
    }
    return false;
    document.getElementById("chat").reset();
}