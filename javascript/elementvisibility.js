document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    const targetDiv = document.getElementById("targetDiv");

    toggleButton.addEventListener("click", function() {
        if (targetDiv.style.display === "none") {
            targetDiv.style.display = "block"; 
        } else {
            targetDiv.style.display = "none"; 
        }
    });
});
