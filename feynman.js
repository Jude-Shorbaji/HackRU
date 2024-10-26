const speechBubble= document.getElementById('speechBubble');//this variable is used to change the text of a textbubble 
const text = ["Hi!", "I'm Sally", "ready to study?"];
let stage=1;
function conversation(){
    if (stage<text.length){
    speechBubble.innerHTML=text[stage];
    stage++;
    }
    
}