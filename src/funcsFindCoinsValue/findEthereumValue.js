// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio');
const axios = require('axios');

// Obtendo valor do Ethereum 
async function findEthereumValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/ethereum/');

        const $ = cheerio.load(data);

        const ethereumValueInRS = $('input').filter('#nacional').attr('value');

        return `R$ ${ethereumValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findEthereumValue;
