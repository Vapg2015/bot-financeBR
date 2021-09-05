// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio')
const axios = require('axios');

// Obtendo valor do Bitcoin 
async function findBitcoinValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/bitcoin-hoje/');

        const $ = cheerio.load(data);

        const bitcoinValueInRS = $('input').filter('#nacional').attr('value');
        
        return `R$ ${bitcoinValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findBitcoinValue;
