alert("Hello");

let name = 'dhanvantari purigosavi';

 function capitalize() {
    let str= name.split(" ");
	
	for(let i=0; i<str.length; i++){
		str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
	}
	document.write(str.join(" "));
		
}
capitalize()
document.write("<hr>");

document.write("<h3>Capitalize All Words</h3>");

let givenString = 'welcome to my world';
  function capitalizeAll(){
	let convertStringToArray = givenString.split(" ");
	
	for (let i=0; i<convertStringToArray.length; i++){
		convertStringToArray[i]= convertStringToArray[i].toUpperCase();
	}
	document.write(convertStringToArray.join(" "));
	
}
capitalizeAll()

document.write("<hr>");
document.write("<h3>IsExist</h3>");

  function isExist(){
	let str = "Radhe Radhe"
	let word ="Radhe"

	let iswordincludes = str.includes(word);
	document.write(iswordincludes);
}
isExist()

document.write("<hr>");
document.write("<h3>Word occurence count</h3>");

  function wordOccurenceCount(){
	
	let str = "bappa morya re bappa morya re "
	let word ="morya"
	
	document.write(str.match(/morya/g).length);
	
}
wordOccurenceCount()

document.write("<hr>");
document.write("<h3>Word Density</h3>");

  function wordDensityCal(givenString, Word){
	let convertStringToArray = givenString.split(" ");
	console.log(convertStringToArray);
	let count = 0;
	
	for(let i=0; i<convertStringToArray.length; i++){
		if(convertStringToArray[i]===Word){
			count++;
	}	
}
	let WordDensity =(count/convertStringToArray.length)*100;
	document.write(WordDensity);
}
wordDensityCal("bappa morya re bappa morya", "morya");	

document.write("<hr>");

document.write("<h3>File extension extraction</h3>");

  function getExt(){
	let fname = "index.html"
	let convertStringToArray = fname.split(".");
	
	document.write(convertStringToArray);
	
	//for(let i=0; i<convertStringIntoArray.length; i++){
		//convertStringIntoArray[i]=convertStringIntoArray[i].slice(1);
	//}
	
	//document.write(convertStringIntoArray.join("."));
	//if(fname.includes(".")){
	
		
		//return convertStringIntoArray[0]+ " " + convertStringIntoArray[1];
		//}
	//else{
		//return null;
	//}
}
getExt()

document.write("<hr>");
document.write("<h3>Removing whitespace</h3>");

  function removeWhitespace(){
	let str = "  Hello   my   name   is    dhanu     "
	let result = str.trim();
	
	document.write(result);
}
removeWhitespace()

document.write("<hr>");
document.write("<h3>Reversing words</h3>");

  function reverseWord(){
	let str ="Hello World"
	//let reversed = ""
	
	//for(let i=str.length-1; i>=0;i--){
		
		//reversed += str[i];
	//}
	
	let reversed = str.split('').reverse().join('');
	document.write(reversed);
	
}
reverseWord()

document.write("<hr>");

document.write("<h3>Count a vowels</h3>");

  function countVowels(givenString){
	//let vowels = " Dhanvantari Purigosavi"
	//let vowelscount=0;
	
	//for(let i=0; i<vowels.length;i++){
		//if (vowel.indexOf(string[i] )!== -1){
			//vowelscount +=-1;
		//}
	//}
	//return vowelscount;
	let match =givenString.match(/[aeiou]/ig);
	console.log(match);
	
	
	document.write(match.length);
}
countVowels("dhanvantari")

document.write("<hr>");


document.write("<h3>String Palindrome</h3>");

  function isPalindrome(givenString){
	//let convertStringIntoArray = givenString.split("").reverse().join("");

	let reverseString =" ";
	for(let i=givenString.length-1; i>=0; i--){
		reverseString += givenString[i];
	}
		reverseString = reverseString.trim();
		
	if(reverseString==givenString){
		document.write(" Given string is palindrome");
	}
	else{
		document.write("Given string is not palindrome");
	}
	//for(let i=givenString.length; i++){
		//if(givenString[i]!= givenString[convertStringIntoArray]){
			//return false;
		//}
		//givenString--;
	//}
		//return true;
	//}
	//document.write(isPalindrome);

//let isPalindrome = "abcde";

}
isPalindrome("nan")
document.write("<hr>");

document.write("<h3>String truncation</h3>");

  function truncateString(givenString){
	givenString = givenString+"...";
	document.write(givenString);
}
truncateString("Hello World")
document.write("<hr>");
document.write("<h3>String Masking</h3>");

  function maskString(givenString, stars){
	let str = givenString.slice(stars);
	console.log(str);
		for(let i=0; i<stars; i++){
			str="#"+str;
		}
		document.write(str);
}
maskString("123456",4)
document.write("<hr>");

document.write("<h3> Email validation</h3>");

 function validateEmail(input){
	
	  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	  
	  if(validRegex.test(input)){
		  //alert("Valid email address!");
		  document.write("Valid email address!");
		  //return true;
	  }
 else{
	 //alert("Invalid email address!");
	 document.write("Invalid email address!");
	  //return false;
 }
	//let str = givenString.split();
		//return email.includes("@");
		
	//for(let i=0; i<givenString;i++){
	//if()
	//}
}
validateEmail("dhanu@gmail.com")

