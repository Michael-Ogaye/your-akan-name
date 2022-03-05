let btnSub=document.getElementById('collect');
btnSub.addEventListener('click', (e)=>{
    e.preventDefault();
    let dob=document.getElementById('dob').value ;
    let gender= document.forms['details'].gender.value;
    //checking for valid dates
    if(parseInt(dob.slice(5,7))<12 && parseInt(dob.slice(8,10))<31){

    let dbt= new Date(dob);
    let dayOfWeek=dbt.getDay();
    console.log(dayOfWeek)
    }
    else{
        alert("You entered an invalid date or month")
    }
    



})