//digital clock

let hourhand=document.querySelector('.hour');
let minhand=document.querySelector('.minute');
let sechand=document.querySelector('.second');

let ticking=function(){
    let currentdate5=new Date();
    console.log(currentdate5)

    let getHour=currentdate5.getHours();

    let getmin=currentdate5.getMinutes();

    let getSec=currentdate5.getSeconds();

    hourhand.textContent = getHour;
    minhand.textContent = getmin;
    sechand.textContent = getSec;

}

setInterval(ticking,1000);//in ms
