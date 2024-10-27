let terms = [];

let concept1;

document.getElementById("Submit1").onclick = function(){
    concept1 = document.getElementById("Input1").value;
    terms.push(concept1);
    document.getElementById("concept1").textContent = `${concept1}`
    document.getElementById("Input1").value = '';
}

let concept2;

document.getElementById("Submit2").onclick = function(){
    concept2 = document.getElementById("Input2").value;
    terms.push(concept2);
    document.getElementById("concept2").textContent = `${concept2}`
    document.getElementById("Input2").value = '';
}

let concept3;

document.getElementById("Submit3").onclick = function(){
    concept3 = document.getElementById("Input3").value;
    terms.push(concept3);
    document.getElementById("concept3").textContent = `${concept3}`
    document.getElementById("Input3").value = '';
}

let definition = [];

let def1;
document.getElementById("Submit4").onclick = function(){
    def1 = document.getElementById("Mnemonic1").value;
    definition.push(def1);
    document.getElementById("Mnemonic1").value = '';
}

let def2;
document.getElementById("Submit5").onclick = function(){
    def2 = document.getElementById("Mnemonic2").value;
    definition.push(def2);
    document.getElementById("Mnemonic2").value = '';
}

let def3;
document.getElementById("Submit6").onclick = function(){
    def3 = document.getElementById("Mnemonic3").value;
    definition.push(def3);
    document.getElementById("Mnemonic3").value = '';
}

document.getElementById("testKnowledge").onclick = function(){
    def3 = document.getElementById("Mnemonic3").value;
    definition.push(def3);
    document.getElementById("Mnemonic3").value = '';
}
