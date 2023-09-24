document.addEventListener("DOMContentLoaded", function () {
    const changeColorsButton = document.getElementById("changeColorsButton");

    changeColorsButton.addEventListener("click", function () {

        const randomBackgroundColor = getRandomColor();
        const randomTextColor = getRandomColor();


        document.body.style.backgroundColor = randomBackgroundColor;
        document.body.style.color = randomTextColor;
    });


    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
