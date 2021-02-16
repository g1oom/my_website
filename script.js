const myname = document.getElementById("myname");
myname.style.transition = "color 0.3s ease-in-out";

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    myname.style.color = `rgb(${red}, ${green}, ${blue})`;
}

window.setInterval(changeColor, 1000);