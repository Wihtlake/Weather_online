async function conect(){
    const api_key = '8f9acd2c83d6e4eb7efbce3b75529f21';
    const lat = '57.153381';
    const long = '65.541924';
    const api_address = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=ru&appid=${api_key}`;
    const fetch_Weather = await fetch(api_address);
    const fetch_json = await fetch_Weather.json();
    console.log(`город: ${fetch_json.name}`);
    console.log(`минимальная температура: ${fetch_json.main.temp_min - 273.15} Кельвинов`);
    console.log(`максимальная температура: ${fetch_json.main.temp_max - 273.15} Кельвинов`);
    console.log(`Статус: ${fetch_json.weather[0].description}`);
    console.log(`Иконка: ${fetch_json.weather[0].icon}`);
}
conect();