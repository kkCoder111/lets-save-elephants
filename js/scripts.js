//Source: https://www.wwf.org.uk/learn/fascinating-facts/elephants

var facts = [
	"Elephants are the largest land mammal.",
	"You can tell African and Asian elephants apart by their ears.",
	"Elephants have 150,000 muscles units in their trunk.",
	"They have thick skin.",
	"They constantly eat.",
	"Calves can stand within 20 minutes of birth."
]

function random(){
	let display = document.getElementById("fact");
	console.log(display);
	let result = Math.floor(Math.random() * 5) + 1;

	console.log(result);
	display.innerHTML = facts[result];
}

function setCookie(name, value, days) {
	const dateHandler = new Date();
	let multiplier = 24*60*60*1000;
	dateHandler.setTime(dateHandler.getTime() + (days*multiplier))
	let expiryDate = "expires=" + dateHandler.toGMTString();
	document.cookie = name + "=" + value + ";" + expiryDate	+ ";path=/";
}

function getCookie(name) {
	let cname = name + "=";
	let decodedCookie = decodeURIComponent(document.cookie);
	let ca = decodedCookie.split(";");
	for(let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(cname) == 0) {
			return c.substring(cname.length, c.length);
		}
	}
	return "";
}

function checkCookie(name, valueIfNotFound, daysIfNotFound) {
	let cookie = getCookie(name);
	console.log(cookie);
	if (cookie != ""){
		return cookie;
	}
	else {
		setCookie(name, valueIfNotFound, daysIfNotFound);
	}
}

function applyThemeOnLoad(){
	let len = 0;
	let theme = getCookie("LSEtheme");
	console.log("OnLoad Theme: " + theme)
	if (theme == "light") {
		document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0,0,0)";
		document.getElementsByTagName("body")[0].style.color = "rgb(255,255,255)";
		document.getElementById("nav").style.backgroundColor = "rgb(205,205,205)";
		len = document.getElementsByClassName("root-nav-link").length;
		for (let i = 0, i < len, i++){
			document.getElementsByClassName("root-nav-link")[i].style.backgroundColor = "rgb(205,205,205)";
			document.getElementsByClassName("root-nav-link")[i].style.color = "rgb(255,255,255)";
		}
		document.getElementById("theme-switch").style.color = "rgb(0,0,0)";
	}

	else if (theme == "dark") {
		document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255,255,255)";
		document.getElementsByTagName("body")[0].style.color = "rgb(0,0,0)";
		document.getElementById("nav").style.backgroundColor = "rgb(50,50,50)";
		len = document.getElementsByClassName("root-nav-link").length;
		for (let i = 0, i < len, i++){
			document.getElementsByClassName("root-nav-link")[i].style.backgroundColor = "rgb(50,50,50)";
			document.getElementsByClassName("root-nav-link")[i].style.color = "rgb(255,255,255)";
		}
		document.getElementById("theme-switch").style.color = "rgb(255,255,255)";
	}

	else {
		console.error("LSEThemeError: The OnLoad theme was not able to be applied.")
	}
}


function switchTheme(){
	let theme = getCookie("LSEtheme");
	console.log("Switched to " + theme + " theme.");
	if (theme == "light") {
		setCookie("LSEtheme", "dark", 30);
		document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(0,0,0)";
		document.getElementsByTagName("body")[0].style.color = "rgb(255,255,255)";
		document.getElementById("nav").style.backgroundColor = "rgb(50,50,50)";
		for (let i = 0, i < len, i++){
			document.getElementsByClassName("root-nav-link")[i].style.backgroundColor = "rgb(50,50,50)";
			document.getElementsByClassName("root-nav-link")[i].style.color = "rgb(255,255,255)";
		}
		document.getElementById("theme-switch").style.color = "rgb(255,255,255)";
	}
	else if (theme == "dark") {
		setCookie("LSEtheme", "light", 30);
		document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(255,255,255)";
		document.getElementsByTagName("body")[0].style.color = "rgb(0,0,0)";
		document.getElementById("nav").style.backgroundColor = "rgb(205,205,205)";
		for (let i = 0, i < len, i++){
			document.getElementsByClassName("root-nav-link")[i].style.backgroundColor = "rgb(205,205,205)";
			document.getElementsByClassName("root-nav-link")[i].style.color = "rgb(255,255,255)";
		}
		document.getElementById("theme-switch").style.color = "rgb(0,0,0)";
	}

	else {
		console.error("LSEThemeError: The theme was not able to be applied.");
	}
}