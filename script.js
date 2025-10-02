function volume_sphere() {
    //Write your code here
	event.preventDefault();

	radius = parseFloat(radius);

	if(isNaN(radius)||radius < 0){
		document.getElementById("volume").value = NaN;
		return;
		
	}
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
	volume = volume.tofixed(4);
	document.getElementById("volume").value = volume;
}

// Attach event listener to form
document.getElementById("MyForm").addEventListener("submit", volume_sphere);