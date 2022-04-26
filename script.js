async function conect(){
    const api_key = '8f9acd2c83d6e4eb7efbce3b75529f21';
    const lat = '57.153381';
    const long = '65.541924';
    const api_address = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=ru&appid=${api_key}`;
    const fetch_Weather = await fetch(api_address);
    const fetch_json = await fetch_Weather.json();
    create(fetch_json)
}
function create(fetch_json){
    const main_box = document.querySelector('.info_container');

    const City = document.createElement('p');
    const City_f = fetch_json.name;
    City.innerText = City_f;
    main_box.appendChild(City);

    const max_t = document.createElement('p');
    const max_t_f = fetch_json.main.temp_max - 273.15;
    const max_t_2 = Math.ceil(max_t_f);
    max_t.innerText = `Макс.: ${max_t_2}`;
    main_box.appendChild(max_t);

    const min_t = document.createElement('p');
    const min_t_f = fetch_json.main.temp_min - 273.15;
    const min_t_2 = Math.floor(min_t_f)
    min_t.innerText = `Мин.: ${min_t_2}`;
    main_box.appendChild(min_t);

    const stat_t = document.createElement('p');
    const stat_t_f = fetch_json.weather[0].description;
    stat_t.innerText = `Статус: ${stat_t_f}`;
    main_box.appendChild(stat_t);

}
conect();