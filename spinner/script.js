let wheel=document.querySelector(".wheel");
let spin=document.querySelector('.spin');
let value=Math.ceil(Math.random()*3600);
spin.onclick=function(){
    wheel.style.transform="rotate("+value+"deg)";
    value+=Math.ceil(Math.random()*3600);
}