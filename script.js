const game=document.querySelector('.container'),
 user=document.querySelector('.user img'),
 cpu=document.querySelector('.cpu img'),
 resultText=document.querySelector('.result_text'),
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
    resultText.innerHTML="Wait..."

    setTimeout(function(){
     game.classList.remove('start');
      user.src=e.target.querySelector('img').src;
      let randomindex=Math.floor(Math.random() * 3);
      let cpuValue=["img/rock.png","img/paper.png","img/scissors.png"];
      cpu.src=cpuValue[randomindex];

      let outcomes={
        PP:'Draw',
        PS:'cpu',
        PR:'user',

        SP:'user',
        SS:'Draw',
        SR:'cpu',

        RR:'Draw',
        RS:'user',
        RP:'cpu',

      }
     
     let  cpuR=["R","S","P"][randomindex];
     let  userR=["R","S","P"][index];
     let outcomesValue=outcomes[cpuR + userR];

      if(cpuR===userR){
        resultText.innerHTML="Match Draw";
      }else{
        resultText.innerHTML=`${outcomesValue} won!!`
      }
    },2500)
  })
 })