const argv = require('./config/yargs').argv;
const { getLugarLatLong } = require('./lugar/lugar');
const { getClima } = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coor = await getLugarLatLong(direccion);
        let clima = await getClima(coor.lat, coor.long);
        return `Temperatura actual en ${argv.direccion}: ${clima.temp}°C`  
    } catch (error) {
        return `No se pudo determinar el clima para '${direccion}'`;
    }

}


getInfo(argv.direccion)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(err =>{
        console.log(err);
    })


