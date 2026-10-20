let ph = document.querySelector('#photointro h3');
let msg='';
let gee='';
let galerialoc;
let answers =[['abouts',
    'Very local but then again how with the wrong buildings in the background, but there are shifting images, mirages, just as there are shifting sands near here. Along a farm field anyhow with a broad path and with a dog.'],
   ['goswickgrass',
    'This is real sharp dune grass but less than the resistance to us walker\'s it does seem rather vulnerable to the sea as the belt of dunes is narrow. The sea is near here and the wind is blowing as you can see right at it and so the low pressure is in the North.'],
   ['horncliffesteading',
   'I called the stables a steading in another photo, dramatic to me as it was evening an the timber frame made good lines. The sunset is usually very visible here due to the Tweed valley catching it by the gap it creates on the other side and enhancing skylines. Anyhow, much more than a steading really, a mansion. '],
   ['oldchainbridge',
   'Very photographed and interesting for the wandering line of the branch tracing the line of the bridge, how does it look so long? Recently revamped, after this photo in fact so at least 5 years old and quite dramatic chasing the pack of good photos far off for this feature would not be chosen but still artistic pleasure from the flow into each other. '],
   ['tweedvalley',
   'Very local again and chosen for the multiple natural elements standing out by their respective colours around the wide River Tweed being set off by the organised space of grazing for horses. With rural land management things still look natural even across large fields earmarked for our use.'] 
 ];
 window.addEventListener("load", function () {
    galerialoc  = document.getElementById('galeria'); 
    galerialoc.addEventListener('click',gale,false); 
});
function gale(e) {    
    if (!e.target.closest('.item')) return;
   let  larger = document.querySelector('div[data-pos="0"]'); //5,10,15  
    let target = e.target.parentElement;
    [target.dataset.pos,larger.dataset.pos] = [larger.dataset.pos,target.dataset.pos];
    msg=e.target.alt;     
    loseheadline();
}
function loseheadline(){
    document.querySelector('#photointro h2').innerHTML='';
    altdetails();
}   
 
function altdetails(){
  if(msg=='goswickgrass'){    
        gee=answers[0][1];
}else if(msg=='abouts'){    
        gee=answers[1][1];
}else if(msg=='horncliffesteading'){    
        gee=answers[2][1];
}else if(msg=='olechainbridge'){    
        gee=answers[3][1];
}else if(msg=='tweedvalley'){    
        gee=answers[4][1];
}else{
gee=' :balls : lost missing notes';
} 
altertext();
} ;
function altertext(){
   document.querySelector('#photosays').innerHTML=msg+ ': '+ gee; 
}  

