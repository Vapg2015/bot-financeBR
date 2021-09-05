// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio');
const axios = require('axios');

// Obtendo valor do Dolar 
async function findDolarValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/');

        const $ = cheerio.load(data);

        const dolarValueInRS = $('input').filter('#nacional').attr('value');

        return `R$ ${dolarValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findDolarValue;
