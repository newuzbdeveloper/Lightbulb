const lightbulbButton = document.querySelector('#lightbulb-button');
let lightbulbImage = document.querySelector('#lightbulb-img');

let isLightbulbOn = false;

lightbulbButton.addEventListener('click', function(){
    if(isLightbulbOn){
        lightbulbImage.src = 'on.png';
        isLightbulbOn = false
    }else{
        lightbulbImage.src = 'off.png';
        isLightbulbOn = true;
    }
    console.log('clicked')
})