// script;

let imgElem = document.querySelector('.continer');
let heartLogo = document.querySelector('.heart');

imgElem.addEventListener("dblclick", function (ev) {
    heartLogo.classList.add('logo');
    
    let xValue = ev.clientX - ev.target.offsetLeft;
    let yValue = ev.clientY - ev.target.offsetTop;
    

    heartLogo.style.top = `${yValue}px`;
    heartLogo.style.left = `${xValue}px`;


    setInterval(() => {
        heartLogo.classList.remove('logo')
    } , 2000)
});