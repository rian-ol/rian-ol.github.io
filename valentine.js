const noButt = document.getElementById("dontSelect");
const yesButt = document.getElementById("Select");

noButt.addEventListener("click", change);
yesButt.addEventListener("click", goYes);
let count =0;

let texts = [
    "please?",
    "bro please",
    "PLEASE",
    "LAST CHANCE PLEASEEEEE"
]

function change(){
    noButt.style.position = "absolute";
    var i = Math.floor(Math.random()* (window.innerWidth - 100))+1;
    var j = Math.floor(Math.random()* (window.innerHeight - 50))+1;
    noButt.style.left = i+"px";
    noButt.style.top = j+"px";

    const newText = document.createElement('span');
    
    newText.innerText = texts[count];
    newText.style.fontSize = "larger";
    newText.style.position = 'absolute';
    
    i = Math.floor(Math.random()*500)+1;
    j = Math.floor(Math.random()*500)+1;
    newText.style.left = i+"px";
    newText.style.top = j+"px";
    document.body.appendChild(newText);

    count +=1;
    if(count == 5){
        window.location.href = "./html/oh.html"
    }
}

function goYes(){
    window.location.href = "./html/yes.html"
}