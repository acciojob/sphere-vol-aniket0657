function volume_sphere() {
    // Get radius input value
    let radius = document.getElementById("radius").value;

    // Convert to number
    radius = parseFloat(radius);

    // Validate input (must be a number and >= 0)
    if (isNaN(radius) || radius < 0) {
        document.getElementById("volume").value = NaN;
        return false; // stop form submission
    }

    // Calculate volume of sphere: V = (4/3) * π * r^3
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round to 4 decimal places
    volume = volume.toFixed(4);

    // Display result in the volume field
    document.getElementById("volume").value = volume;

    return false; // prevent page refresh
}

window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
