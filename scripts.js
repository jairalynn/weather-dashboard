var button = document.querySelector('#button');
var cityValue = document.querySelector('.cityValue');
var city = document.querySelector('.city');
var description = document.querySelector('.description');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var uvindex = document.querySelector('.uvindex');

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ cityValue.value +'&units=imperial&appid=668cd875e55a27681d21ea983911b3b3')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        var cityValue = data['name'];
        var tempValue = data['main']['temp'];
        var descriptionValue = data['weather'][0]['description'];
        var humidityValue = data['main']['humidity'];
        var windValue = data['wind'].speed;
        
  
        city.innerHTML = cityValue;
        description.innerHTML = descriptionValue;
        temp.innerHTML = tempValue + '°F';
        humidity.innerHTML = humidityValue + '% Humidity';
        wind.innerHTML = windValue + ' mph';
        
        
    
    })
})




// button.addEventListener('click', function(){
//     fetch('http://api.openweathermap.org/data/2.5/uvi/forecast?lat={lat}&lon={lon}&cnt={cnt}&appid=668cd875e55a27681d21ea983911b3b3')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//         var uvindex = data['value'];

//         uvindex.innerHTML = uvindex;

        
        
    
//     })
// })



  