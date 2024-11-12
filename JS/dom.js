const div=document.createElement("div");
div.id="div-1";
div.style.backgroundColor="yellow";
div.style.width='200px';
div.style.height="200px";
document.bosy.appendChild(div)
const para=document.createElement("p");//p is element of HTML
para.id='para-1';
para.style.color="red";
para.innerText="this is my first paragraph"
div.appendChild(para);
//div ke andar parahraph