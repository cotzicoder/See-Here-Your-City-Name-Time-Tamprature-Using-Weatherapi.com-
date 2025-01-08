const input = document.getElementById('input-city')
const button = document.getElementById('submit-btn')

const city = document.getElementById('localcity')
const timecity = document.getElementById('localtimecity')
const temp = document.getElementById('tempc')


async function getdata(cityname) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=7f5525a87ea64d5e92862313250701&q=${cityname}&aqi=no`)
    return await promise.json();
}

button.addEventListener("click", async () => {
    const user = input.value;
    const result = await getdata(user);
    console.log(result);

    city.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`
    timecity.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;
})