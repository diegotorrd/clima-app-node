const axios = require('axios');


const getLugarLatLng = async(dir) => {
    const encodedUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
        headers: {
            'x-rapidapi-key': '36bf5594cfmsh44270cc63702c91p18d36bjsn4ac28b592af3',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    });

    const resp = await instance.get()

    if (resp.data.Results !== null) {
        if (resp.data.Results.length === 0 || resp.data.Results === null) {
            throw new Error(`No hay resultados para ${dir}`)
        }
    } else {
        throw new Error(`NULL - No hay resultados para ${dir}`)
    }


    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}