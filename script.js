let btnSub=document.getElementById('collect');
btnSub.addEventListener('click', (e)=>{
    e.preventDefault();
    let dob=document.getElementById('dob').value ;
   
    //checking for valid dates
    if(parseInt(dob.slice(5,7))<=12 && parseInt(dob.slice(8,10))<=31){

    let dbt= new Date(dob);
    let dayOfWeek=dbt.getDay();
    console.log(dayOfWeek)

    //assigning the Akan names
    // Note that the first day is sunday and has an index of 0/ saturday has an index of 6
    let gender= document.forms['details'].gender.value;

    let akanName='';
    if(dayOfWeek===0){
      (gender=='Male') ? akanName='Kwasi': akanName='Akosua'
    }
    
     else if(dayOfWeek===1){
      (gender=='Male') ? akanName='Kwadwo': akanName='Adwoa'
    }
    
    else if(dayOfWeek===2){
      (gender=='Male') ? akanName='Kwabena': akanName='Abenaa'
    }
    
    else if(dayOfWeek===3){
      (gender=='Male') ? akanName='Kwaku': akanName='Akua'
    }
    
    else if(dayOfWeek===4){
      (gender=='Male') ? akanName='Yaw': akanName='Yaa'
    }
    
    else if(dayOfWeek===5){
      (gender=='Male') ? akanName='Kofi': akanName='Afua'
    }
    
    else if(dayOfWeek===6){
      (gender=='Male') ? akanName='Kwame': akanName='Ama'
    }
    else{
        akanName="we were unable to predict your name"
    }
    console.log(akanName)
    let fdback=document.getElementById('feedback');
    
    fdback.innerHTML=`<P class="text-success fs-4">Wow ! <svg width="64px" height="64px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet"><path d="M52 22.5c0 11.3-8.8 24.4-19.8 24.4c-10.9 0-19.8-13-19.8-24.4C12.5 11.2 21.3 2 32.2 2C43.2 2 52 11.2 52 22.5" fill="#ed4c5c"></path><g fill="#94989b"><path d="M31.5 49.1V49v.1"></path><path d="M31.6 49.2c-.1 0-.1-.1 0 0"></path></g><path d="M33 49.2h-1.5c0 1.8-.4 3.9-1.9 5.2c-2.1 1.8-4.9.7-7.4.6c-3-.1-5.6 1.2-7.7 3.2c-.8.7-1.6 1.7-2.3 2.5c-.8.9.3 1.9 1.1 1c1.5-1.8 2.6-3.1 4.6-4.3c2.6-1.5 5-.7 7.8-.6c3.2.2 6.1-1.4 7-4.7c.2-.7.3-2 .3-2.9" fill="#b2c1c0"></path><path d="M31.5 49c0-.1 0 0 0 0" fill="#94989b"></path><path d="M30.8 48h2.9c.9 0 .9-1.3 0-1.3h-2.9c-.9.1-.9 1.3 0 1.3" fill="#b2c1c0"></path><path d="M30.1 50h4.3c1.4 0 1.4-1.9 0-1.9h-4.3c-1.4-.1-1.4 1.9 0 1.9" fill="#ed4c5c"></path></svg> your Akan-Name is: <span class="text-danger">${akanName}</span></p>
    <p class="tex-muted mt-2">Press the button to try again</p>
    <button class="btn btn-outline-success " type="submit">Try again</button>`;


    document.forms['details'].style.display='none';
    fdback.style.display="block";
    let trybtn=document.querySelector("#feedback button");
    trybtn.addEventListener('click',(e)=>{
      e.preventDefault();
      document.forms['details'].style.display='block';
      fdback.style.display='none';

    })





    }
    else{
        alert("You entered an invalid date or month")
    }
    



})
// search logic
let words=document.querySelectorAll("div.tab-pane");

let term=document.getElementById("searcha");
term.addEventListener("keyup",(e)=>{
  e.preventDefault();

  for(var i=0; i<words.length; i++){
    
    let workArea=words[i].textContent;
    let searchterm= term.value.toLowerCase();
    
    if(workArea.toLowerCase().indexOf(searchterm)!= -1){
     words[i].style.display='block' ;
     searchterm.style.color= "red"
    }

    else{
    words[i].style.display='none';
    }
  }
})
