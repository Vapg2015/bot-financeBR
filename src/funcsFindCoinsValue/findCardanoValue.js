// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio')
const axios = require('axios');

// Obtendo valor do Cardano 
async function findCardanoValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/cardano-hoje/');

        const $ = cheerio.load(data);

        const cardanoValueInRS = $('input').filter('#nacional').attr('value');
        
        return `R$ ${cardanoValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findCardanoValue;
