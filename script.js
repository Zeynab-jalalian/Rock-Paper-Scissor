const game=document.querySelector('.container'),
 user=document.querySelector('.user img'),
 cpu=document.querySelector('.cpu img'),
 resultText=document.querySelector('.reslut_text'),
 options=document.querySelectorAll('.option');

 options.forEach(function(image,index){
  image.addEventListener('click',(e)=>{
    image.classList.add('active');
    game.classList.add('start');
    options.forEach(function(image2,index2){
    if(index!==index2){
      image2.classList.remove('active');
    }
    })
    user.src=cpu.src='img/rock.png';
    setTimeout(function(){
     game.classList.remove('start');
     
    },2500)
  })
 })