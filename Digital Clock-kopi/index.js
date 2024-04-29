const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const secondsEL = document.getElementById("seconds");
const ampmEL= document.getElementById("ampm");
function updateClock()
{
  let h= new Date().getHours();
  let m= new Date().getMinutes();
  let s= new Date().getSeconds();
  let ampm="AM";
 
if(h > 12)
{
    ampm = "PM";
 
}
 
 
  if(h<10)
  {
    h= "0" + h;
  }
 
if(m<10)
{
    m="0"+m;
}
 
if(s<10)
{
    s="0"+s;
}
 
  hourEL.innerText= h;
  minutesEL.innerText=m;
  secondsEL.innerText=s;
  ampmEL.innerText=ampm;
 
}
 
updateClock();
setInterval(updateClock, 1000)
 
 
 

 