let ph = document.querySelector('#photointro h3');
let msg='';
let gee='';
let galerialoc;
let answers =[['firstbambu',
    'There was air thick with something like wild forest, dense but only a hint as\
   this is the first day and the first few steps on a side road and in the dark. Jet lag \
   or the like causing a slow exit of the residence . These photos are still on the UK \
   clock, so are 7 hours ahead of the actual time. Funny to think how much that is revealed \
   as artificial to me. It is dark and still the afternoon to me really. Sunset is a little \
   after 5pm as we are slightly further north here early in the year and that is when I \
   went out yet it has been a long day and since we arrived early I in fact can be out late \
   and feel this instead of that the time has flown on ahead. The moon is the same for \
   everyone is it I notice as when we spin to face it, pretty much north or south it is the \
   same amount of earth blocking the sun from it?  '],
   ['greenbetween',
    'The serious urban structures have old established green patches. On closer look they really\
   are often just carved around old landscapes but I think the trees show that this was not the \
   first time as the forest is bambu here'],
   ['arthotel',
   'Ratty I luv u. Well more an alien come human species of sci-fi was my first impression. A very \
   good piece of art. Perhaps 8m tall, at Art Hotel, Narita. '],
   ['skywingforever',
   'Luckily no great cumulous on the journey but pretty much bright non stop cloud. Also on the first \
   which was to Milan a  significant  but not complete covering of cloud. So no view of the Alps. This is \
   Japan leg from Shanghai where cloud started to thin at the Islands themselves. '],
   ['lightdarktrain',
   'A train moving along a long long viaduct. Lots of transport infrastructure is suspended or \
   elevated here so far, also indicated in photos I have seen. I think this is  showing top level authority \
    in the planning. Significant to that there are so many poles, highly anticapted electrical grid \
    with many services. Very tall compared to uk but perhaps they are not normal ones here so far and they \
   for all the bamboo seem generally to be concrete. Alot of what support infrastructure that might be \
    concrete in the UK is metal, the bridge come flyovers at Narita airport for instance are massive \
    diameter girders. That is planning that makes the jungle vegetation near the airport which I still \
    am near in this Narita Gateway Hotel all the more intense and striking.'] 
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
    document.querySelector('#photointro h3').innerHTML='';
    altdetails();
}   
 
function altdetails(){
  if(msg=='firstbambu'){    
        gee=answers[0][1];
}else if(msg=='greenbetween'){    
        gee=answers[1][1];
}else if(msg=='arthotel'){    
        gee=answers[2][1];
}else if(msg=='skywingforever'){    
        gee=answers[3][1];
}else if(msg=='lightdarktrain'){    
        gee=answers[4][1];
}else{
gee=' :balls : lost missing notes';
} 
altertext();
} ;
function altertext(){
   document.querySelector('#photosays').innerHTML=msg+ ': '+ gee; 
}  
let addera= document.querySelector('.highlightb');
addera.setAttribute('className', 'yellow');
  
