let array = [];
let concept1;

document.getElementById("Submit1").onclick = function(){
    concept1 = document.getElementById("Input1").value;
    document.getElementById("H61").textContent = `${concept1}`
    array.push(concept1);
}

let concept2;

document.getElementById("Submit2").onclick = function(){
    concept2 = document.getElementById("Input2").value;
    document.getElementById("H62").textContent = `${concept2}`
    array.push(concept2);
}

let concept3;

document.getElementById("Submit3").onclick = function(){
    concept3 = document.getElementById("Input3").value;
    document.getElementById("H63").textContent = `${concept3}`
    array.push(concept3);
}
