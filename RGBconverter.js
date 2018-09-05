//toHex: needs exception for non-integers. should move exception handling to input part
//toRGB: needs exception handling. should move exception handling to input part
//random comment
function toHex(red, green, blue) { //takes string values
	function toHex(dec) { //for single value
		try {
			if (dec > 255 || dec < 0)
				throw new Error("Invalid number!");	
			return dec.toString(16);
		}
		catch(e) {
			console.log(e); //Invalid number!
		}
	}
	
	const hex = "#" + toHex(parseInt(red)) + toHex(parseInt(green)) + toHex(parseInt(blue));
	return hex;
}

function toRGB(hexStr) {
	function toDec(hex) { //for single value (2 digit hex)
		return parseInt(hex, 16);
	}
	if (hexStr.charAt(0) === '#')
	{
		hexStr = hexStr.substr(1);
	}
	const red = toDec(hexStr.substr(0,2)); //first 2 digits
	const green = toDec(hexStr.substr(2,2)); //second 2 digits
	const blue = toDec(hexStr.substr(4,2)); //second 2 digits
	const rgb = `Red: ${red}, Green: ${green}, Blue: ${blue}`;
	return rgb;
}

function converter() {
	let choice; 
	do {
		choice = prompt("convert RGB or HEX value?", "RGB");
		if (choice.toUpperCase() !== "RGB" && choice.toUpperCase() !== "HEX") {
			alert("Please enter a valid choice!");
		}
		else
			break;
	}
	while (true);
	
	if (choice.toUpperCase() === "RGB"){
		const red = prompt("Red: ", "255");
		const green = prompt("Green: ", "255");
		const blue = prompt("Blue: ", "255");
		console.log(toHex(red, green, blue));
	}
	else if (choice.toUpperCase() === "HEX"){
		const str = prompt("Hex: ", "#ffffff");
		console.log(toRGB(str));
	}	
}