const yargs= require('yargs');
const geocode= require('./geocode/geocode.js');
const weather= require('./weather/weather');
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

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.latitude,results.longitude, (errorMessage,weatherResults)=>{
            if(errorMessage){
                console.log(errorMessage);
            }
            else{
                console.log(`Its currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
            }
        })
    }
});



