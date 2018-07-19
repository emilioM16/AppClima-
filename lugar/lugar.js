const axios = require('axios');

let encodedUrl = '';

const getLugarLatLong = async(direccion) => {
    encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyAhdy4MpuQkzcHMDyvtf94zcmLqL8K0dFQ`);
    
    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${ direccion }`);
    }            
    let res = resp.data.results[0];
    let posicion =  res.geometry.location;
    return {
        direccion: res.formatted_address,
        long: posicion.lng,
        lat: posicion.lat
    }
}




module.exports = {
    getLugarLatLong
}