const butt = document.getElementById("cta");

butt.addEventListener("click", changeButton);

function changeButton(){
    butt.innerHTML = "Confirmed!";
    butt.setAttribute("disabled", "disabled");
    butt.style.cursor = "not-allowed";
    butt.style.backgroundColor = "grey";
}