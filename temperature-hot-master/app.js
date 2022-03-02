const API_KEY =`d352b6889cfd62c4432fec277bf8f691`;
const searchTemparature=()=>{
    const city =document.getElementById('city-name').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // console.log(url);
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemparature(data));
}

const setInnerText = (id,text) =>{
    document.getElementById(id).innerText=text;
}
const displayTemparature =(temparature)=>{
    
    setInnerText('city',temparature.name);
    setInnerText('temparature',temparature.main.temp);
    setInnerText('condition',temparature.weather[0].main);
    console.log(temparature);
    //set weather icon
    const url =`http://openweathermap.org/img/wn/${temparature.weather[0].icon}@2x.png`;
    const imageIcon=document.getElementById('weather-icon');
    imageIcon.setAttribute('src',url);
    

}