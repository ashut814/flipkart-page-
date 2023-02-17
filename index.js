const image = document.querySelector('.slider-image');
let counter = 0;

const  right = () => {
  if(counter < 6){
    counter+=1;
    image.style.transition = `1s`;
    image.style.transform = `translate(${-counter * 100}%)`
  }
}

const left = () => {
    if(counter > 0){
    counter-=1;
    image.style.transition = `1s`;
    image.style.transform = `translate(${-counter *100}%)`
  }
}