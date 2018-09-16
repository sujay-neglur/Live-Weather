var request= require('request');
var getWeather= (latitude, longitude,callback) =>{
    request({
        url:`https://api.darksky.net/forecast/acac331a9a995ee10e6dffc93d05ee87/${latitude},${longitude}`,
        json:true
    },(error,response,body)=> {
        if(!error && response.statusCode===200){
            callback(undefined,{
                temperature:body.currently.temperature,
                apparentTemperature:body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch weather');
        }
    });
}

module.exports={
    getWeather
}
