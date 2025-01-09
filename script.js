const mama = document.getElementById("mama");
const grandma = document.getElementById("grandma");

initiate();

function initiate(){
    var number = 0;
    let timer;

    setTimeout(() => {
        timer = setInterval(()=>{
            number++;
            mama.textContent = number
        }, 1000);
    }, 500);

    mama.addEventListener('mouseout', function(){
        timer = setInterval(()=>{
            number++;
            mama.textContent = number
        }, 1000);
    });


    mama.addEventListener('mouseenter', function(){
        mama.textContent = "new web page"; 
        clearInterval(timer);
  });


  mama.addEventListener('click', function(){
    clearInterval(timer);
    number = 0;
    
});


var number2 = 0;
let timer2;

grandma.addEventListener('mouseout', function(){
    timer2 = setInterval(()=>{
        number2++;
        grandma.textContent = number2;
    }, 1000);
});


grandma.addEventListener('mouseenter', function(){
    grandma.textContent = "my grandma is the best"; 
    clearInterval(timer2);
    setTimeout(()=>{
        number2 =0;
    },1000)
    
});


grandma.addEventListener('click', function(){
grandma.textContent = number2; 
clearInterval(timer2);

});
}