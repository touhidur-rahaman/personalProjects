function addition(){
	var ourAnswer= document.getElementById("answer").value;
	isNaN(ourAnswer);
	if (isNaN(ourAnswer)) {
		document.getElementById("output").innerHTML= "Hey "+ourAnswer+" is not a number.";
	}else{
		if (ourAnswer==correctNum) {
			document.getElementById("output").innerHTML= "Correct! " + num1 + " + "+ num2+ " = "+ correctNum;	
		}else{
			document.getElementById("output").innerHTML= "Incorrect! " + num1 + " + "+ num2+ " = "+ correctNum + ", not" + ourAnswer;
		}
		
	}
	
}

function newCard(){
	document.getElementById("output").innerHTML="";
	document.getElementById("answer").value="";

	num1=Math.floor(Math.random() * 10)+1;
	num2=Math.floor(Math.random() * 10)+1;
	document.getElementById("demo").innerHTML=num1+" + "+num2;

	correctNum= num1+num2;
}