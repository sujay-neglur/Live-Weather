const request= require('request');
var geocodeAddress= (address,callback)=>{
    var urlString= `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}`;
    request({
        url:urlString,
        json:true
    },
    (error,response, body)=> {
        if(error){
            callback('Unable to connect with Google servers');
        } else if(body.status==='ZERO_RESULTS'){
            callback('Cannot find address');
        }else if(body.status==='OK'){
            callback(undefined, {
                address:body.results[0].formatted_address,
                latitude:body.results[0].geometry.location.lat,
                longitude:body.results[0].geometry.location.lng
            })
        }
    });
}
module.exports={
    geocodeAddress
}