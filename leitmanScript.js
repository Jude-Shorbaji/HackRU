 // arrays that hold all terms and definitions respectively
 let allTerms = [];
 let allDefinitions = [];

 function addToCardArrayMain(){
     addToCardArray();

 }

 // each time button is pressed it adds all the terms to the array
 function addToCardArray(){

     let term1 = document.querySelector("#term1");
     let term2 = document.querySelector("#term2");
     let term3= document.querySelector("#term3");
     let term4 = document.querySelector("#term4");
     let term5 = document.querySelector("#term5");


     let definition1 = document.querySelector("#definition1");
     let definition2 = document.querySelector("#definition2");
     let definition3 = document.querySelector("#definition3");
     let definition4 = document.querySelector("#definition4");
     let definition5 = document.querySelector("#definition5");

     //adds everything to an array
     allTerms = [term1.value, term2.value, term3.value, term4.value, term5.value];
     allDefinitions = [term1.value, term2.value, term3.value, term4.value, term5.value];

     console.log(allTerms);
     console.log(allDefinitions);

 }

 function resetInput(){

     document.getElementById("#term1").value = '';
     document.getElementById("#term2").value = '';
     document.getElementById("#term3").value = '';
     document.getElementById("#term4").value = '';
     document.getElementById("#term5").value = '';

     document.getElementById("#definition1").reset();
     document.getElementById("#definition2").reset();
     document.getElementById("#definition3").reset();
     document.getElementById("#definition4").reset();
     document.getElementById("#definition5").reset();

 }
 

 function quizMe(){
     score = 0;
     document.getElementById("#definition1").value = '';
     document.getElementById("#definition2").reset();
     document.getElementById("#definition3").reset();
     document.getElementById("#definition4").reset();
     document.getElementById("#definition5").reset();

     alert("you have 45 seconds to answer:");
     setTimeout(quizMe, 10000);

     addToCardArray();
     for (i = 5; i < 10; i++){

         if (allDefinitions[i] == allDefinitions(i-5)){
             score = score + 1;
         }

     }

     document.getElementById("score").innerHTML = score;

 }
