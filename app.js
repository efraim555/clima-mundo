//const axios = require('axios');
const {argv} = require('./config/yargs');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async direccion => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `La temperatura en la ciudad ${coors.direccion} es de ${temp}`;

    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

};

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);

        clima.getClima(resp.lat, resp.lng)
            .then(resp => console.log(`Temperatura: ${resp}`))
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));*/