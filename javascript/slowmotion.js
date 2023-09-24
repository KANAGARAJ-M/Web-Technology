document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");
    const ball = document.getElementById("ball");
    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", function() {
        
        ball.style.transform = "translateX(300px)";
        
        ball.style.backgroundColor = "blue";

        
        setTimeout(function() {
            ball.style.transform = "translateX(0)";
            ball.style.backgroundColor = "red";
        }, 3000);
    });
});
