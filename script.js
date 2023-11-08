let offset = 0;
let textArray = ["Barca", "Myu","Real", "Bayer"]
const sliderLine = document.querySelector('.slider-line');
const sliderH1 = document.createElement('h1')
sliderH1.classList="slider-text"
const sliderText = document.querySelector('.slider-text')

// sliderText.innerHTML= "Image slider in javascript"

const next = document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset +512;
    textArray.map((index)=>{

        console.log(index);
    })
    if(offset > 1536){
        offset=0;
    }
    sliderLine.style.left = -offset + 'px'
    console.log(next);
    console.log(sliderLine);
    console.log(offset);
})

const prev = document.querySelector('.slider-prew').addEventListener('click', function(){
    offset = offset -512;
    textArray.map((index)=>{

        console.log(index);
    })
    if(offset < 0){
        offset=1536;
    }
    sliderLine.style.left = -offset + 'px'

    console.log(next);
    console.log(sliderLine);
    console.log(offset);
})