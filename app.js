const API_KEY =`d352b6889cfd62c4432fec277bf8f691`;
const searchTemparature=()=>{
    const city =document.getElementById('city-name').value;
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    console.log('clicked');
}