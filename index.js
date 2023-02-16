const image = document.querySelector('.slider-image');
let counter = 0;

const  right = () => {
  if(counter < 500){
    counter+=100;
    image.style.transition = `1s`;
    image.style.transform = `translate(${-counter}%)`
  }
}

const left = () => {
    if(counter > 0){
    counter-=100;
    image.style.transition = `1s`;
    image.style.transform = `translate(${-counter}%)`
  }
}


setInterval(()=>{
  if(counter >= 0 && counter <= 500){
    counter += 100;
  }
  else{
    counter = 0;
  }
  image.style.transition = `1s`;
  image.style.transform = `translate(${-counter}%)`
},3000);