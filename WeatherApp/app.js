var button=document.querySelector('.button')
var inputValue=document.querySelector('.inputValue')
var name=document.querySelector('.name');
var desc=document.querySelector('.desc');
var temp=document.querySelector('.temp');

async function getdata(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' +inputValue.value + '&appid=08222362b887418db5399c814820b83b')
    .then(response=>response.json())
    .then(data=>{
        var nameValue=data['name'];
        var tempValue=data['main']['temp'];
        var descValue=data['weather'][0]['description'];

        name.innerHTML=nameValue;
        temp.innerHTML=tempValue;
        desc.innerHTML=descValue;

    })
    .catch(err=>alert("wrong city name!"))
}
button.addEventListener('click',function(){
    
    if(inputValue.value == "")
    {
        alert("enter city name");
    }
    else{
        var status = check_alert(inputValue.value);
    if(status)
    {
        getdata();
    }
    else{

    }}
})    


function check_alert(inputValue){
    var regex=/^[A-Za-z]+$/;
    if(regex.test(inputValue)==false){
        alert("only alphabets are allowed");
        return false;
    }
    else
        return true;
}
