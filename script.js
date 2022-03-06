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
    fdback.innerHTML=`<P class="text-success fs-4">Wow !your Akan-Name is: <span class="text-danger">${akanName}</span></p>
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