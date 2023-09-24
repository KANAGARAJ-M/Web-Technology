document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const cursorInfo = document.getElementById("cursorInfo");

    container.addEventListener("mousemove", function(event) {
        const x = event.clientX - container.getBoundingClientRect().left;
        const y = event.clientY - container.getBoundingClientRect().top;

        cursorInfo.textContent = `Cursor Coordinates: (${x}, ${y})`;
    });
});
