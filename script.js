const nav=document.getElementById('nav');
const tog=document.getElementById('toggle');
tog.ondblclick=()=>{
    tog.classList.toggle('active');
    nav.classList.toggle('active');
}

var cxzw=document.getElementsByTagName("img");
    var jds=0,counter=0;
    var g=setInterval(func,50);
    var mc = document.getElementById('mCard');
    var lder=document.getElementById('lder');
    
    var urll=`https://cdn-p2.frzdb.net/fifamobile/images/sprites_22/conv_playercarui_toty23_s7_TOTY23_ICON_LOOP.png`;

    mc.onclick=()=>{
        var prog=document.getElementById('player-prog').value;
        urll=`https://cdn-p2.frzdb.net/fifamobile/images/sprites_22/conv_${prog}.png`;
        cxzw[0].src=urll;
        lder.style.cssText='display:block';
        cxzw[0].style.cssText='display:none';
    }
    mc.ondblclick=()=>{
        alert("Hola,\ Por favor espera a que la carta se cargue y no olvides suscribirte a mi canal😊")
    }
    function func(){
        if(counter>=45){
            counter=0;
            jds=0;
        }   
        cxzw[0].style=`left: ${jds}px`;
        jds-=256;
        counter++;
    };

    cxzw[0].addEventListener('load',()=>{
        lder.style.cssText='display:none';
        cxzw[0].style.cssText='display:block';
    });
