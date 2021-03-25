var x = document.getElementById("demo");
var xx = document.getElementById("demos");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else { 
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

let saveFile = () => {
const name = document.getElementById('demos');
let data = 
		'\r Name: ' + name.value+'\r\n '
		const textToBLOB = new Blob([data], { type: 'text/plain' });
	const sFileName = 'formData.txt';	   // The file to save the data.

	let newLink = document.createElement("a");
	newLink.download = sFileName;

	if (window.webkitURL != null) {
		newLink.href = window.webkitURL.createObjectURL(textToBLOB);
	}
	else {
		newLink.href = window.URL.createObjectURL(textToBLOB);
		newLink.style.display = "none";
		document.body.appendChild(newLink);
	}

	newLink.click(); 
}

function showPosition(position) {
	var x = document.getElementById("demo");
var xx = document.getElementById("demos");
  x.innerHTML = `Latitude:${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
  xx.value=`${position.coords.latitude}\t${position.coords.longitude}`;
}

function copy() {
	let copyText = document.getElementById("demos");
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Nokopētais teksts: " + copyText.value);
}

function save() {
	var x = document.getElementById("demo");
	download("download.txt", x.innerHTML)
}
function download(filename, text) {
	let element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}
