function takesNumber(tyson){
    let dogMeat = "This function takes a number, multiplies it from 1 to 10, then stores each of these numbers";
    console.log(dogMeat);

    const multipleArray = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

    const multipleArray1 = [];
    for (let i = 1; i < 11; i++) {

        // console.log(i);

        let result1 = tyson * i;
        // console.log(result1);


        multipleArray1.push(result1);
      } 

      return multipleArray1; 

}

let numberOne = 5;

let resultFromFunction = takesNumber(numberOne);
console.log(resultFromFunction);

function takesInputBoxValue(){

  let cat = "This function allows a number to be inputted into the input box."
  console.log(cat);

  numberOne = document.getElementById("multiplier").value;
  let numberOneConvertedToInt = parseInt(numberOne);
  console.log(numberOne);

  let functionResult = takesNumber(numberOneConvertedToInt);
  console.log(functionResult);

  let newParagraph = document.getElementById("theMultiplication");
  let newParagraph2 = "Times Tables for the number " + numberOne; 
  newParagraph.innerHTML = newParagraph2; 

  let multiplicationTablesDiv = document.getElementById("theMultiplication2");

  for(let i = 0; i < 10; i++){
    let himalaya = document.createElement("p");
    // 50 x 1 = 50 

    let storage = i;
    storage ++;

    let multiplicationTimesTables = numberOne + " x " + storage + " = " + functionResult[i]; 
    console.log(multiplicationTimesTables);
    himalaya.innerHTML = multiplicationTimesTables;
    multiplicationTablesDiv.appendChild(himalaya);

  }
  

}



