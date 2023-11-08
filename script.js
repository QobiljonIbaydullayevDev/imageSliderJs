let offset = 0;
const sliderLine = document.querySelector('.slider-line');

const next = document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset +512;
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
    if(offset < 0){
        offset=1536;
    }
    sliderLine.style.left = -offset + 'px'

    console.log(next);
    console.log(sliderLine);
    console.log(offset);
})