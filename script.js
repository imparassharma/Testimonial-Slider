const main = document.querySelector(".slide-container");
const slides = Array.from(main.children);
console.log(slides);

const next = document.getElementById("next");
const prev = document.getElementById("prev");

const totalslides = slides.length;
console.log(totalslides)

next.addEventListener("click",function(){
    movenext();
})

prev.addEventListener("click",function(){
    moveprev();
})

let slideposition = 0;

function updateimg(slideposition){
    slides.forEach((slide,slideposition)=>{
        slide.classList.remove("current-slide");
    })

    slides[slideposition].classList.add("current-slide");
}

function updatetxt(slideposition){
    text.forEach((t,slideposition)=>{
        t.classList.remove("show");
    })

    text[slideposition].classList.add("show");
}




function movenext(){
    if(slideposition === totalslides-1){
        slideposition = 0
    }
    else{
        slideposition++;
    }
    updateimg(slideposition);
    updatetxt(slideposition);
}

function moveprev(){
    if(slideposition === 0){
        slideposition = totalslides-1;
    }

    else{
        slideposition--;
    }
    updateimg(slideposition);
    updatetxt(slideposition);
}


/****************TEXT******************/

const textsection = document.querySelector(".text-section");
const text = Array.from(textsection.children);