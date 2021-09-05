// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio')
const axios = require('axios');

// Obtendo valor do Cardano 
async function findDolarTurValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/dolar-turismo/');

        const $ = cheerio.load(data);

        const dolarTurValueInRS = $('input').filter('#nacional').attr('value');
        
        return `R$ ${dolarTurValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findDolarTurValue;