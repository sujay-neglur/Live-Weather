const yargs= require('yargs');
const axios= require('axios');
const argv= yargs.options({
    a:{
        demand:true,
        alias:'address',
        describe:'Address to get weather for',
        string:true
    }
}).help()
.alias('help','h')
.argv;

var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`;
axios.get(geocodeUrl).then((response) => {
    if(response.data.status=== 'ZERO_RESULTS'){
        throw new Error('Address not found');
    }
    var latitude= response.data.results[0].geometry.location.lat;
    var longitude= response.data.results[0].geometry.location.lng;
    var weatherUrl=`https://api.darksky.net/forecast/acac331a9a995ee10e6dffc93d05ee87/${latitude},${longitude}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then(response => {
    var temperature= response.data.currently.temperature;
    var apparentTemperature= response.data.currently.apparentTemperature;
    // console.log(temperature, apparentTemperature);
    console.log(`It is ${temperature}. It feels like ${apparentTemperature}`);
}).catch((err) => {
    if(err.code==='ENOTFOUND'){
        console.log('Unable to connect to the server');
    }
    else{
        console.log(err.message);
    }
});