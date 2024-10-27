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

let mnem1;
let mnem2;
let mnem3;
document.getElementById("testKnowledge").onclick = function(){
    mnem1 = definition[0];
    mnem2 = definition[1];
    mnem3 = definition[2];
    document.getElementById("mnem1").textContent = `What concept does this mnemonic resemble?: ${mnem1}`;
    document.getElementById("mnem2").textContent = `What concept does this mnemonic resemble?: ${mnem2}`;
    document.getElementById("mnem3").textContent = `What concept does this mnemonic resemble?: ${mnem3}`;
}

let ans1;
document.getElementById("ansSubmit1").onclick = function(){
    ans1 = document.getElementById("Answer1").value;
    if (ans1 === terms[0]) {
        document.getElementById("msg1").textContent = `Correct!`
    } else {
        document.getElementById("msg1").textContent = `Wrong!`
    }
    document.getElementById("ansSubmit1").value = '';
}

let ans2;
document.getElementById("ansSubmit2").onclick = function(){
    ans2 = document.getElementById("Answer2").value;
    if (ans2 === terms[1]) {
        document.getElementById("msg2").textContent = `Correct!`
    } else {
        document.getElementById("msg2").textContent = `Wrong!`
    }
    document.getElementById("ansSubmit2").value = '';
}

let ans3;
document.getElementById("ansSubmit3").onclick = function(){
    ans3 = document.getElementById("Answer3").value;
    if (ans3 === terms[2]) {
        document.getElementById("msg3").textContent = `Correct!`
    } else {
        document.getElementById("msg3").textContent = `Wrong!`
    }
    document.getElementById("ansSubmit3").value = '';
}
