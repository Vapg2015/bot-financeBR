// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio')
const axios = require('axios');

// Obtendo valor do Cardano 
async function findRippleValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/ripple-hoje/');

        const $ = cheerio.load(data);

        const rippleValueInRS = $('input').filter('#nacional').attr('value');
        
        return `R$ ${rippleValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findRippleValue;