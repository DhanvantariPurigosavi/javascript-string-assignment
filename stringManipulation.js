function capitalizeFLetter() {
    let string = 'dhanu';
    console.log(string.( string[0].toUpperCase()));
}
capitalizeFLetter()

function capitalizeALLLetter(){
	let string = "Dhanvantari";

	console.log(string.replace( string.toUpperCase()));

}
capitalizeALLLetter() 

function wordexistence(){
const str = 'Hello World!';
const substr = 'World';

console.log(str.includes(substr));
}