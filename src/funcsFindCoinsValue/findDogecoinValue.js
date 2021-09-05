// Importando as bibliotecas cheerio e axios
const cheerio = require('cheerio')
const axios = require('axios');

// Obtendo valor do Cardano 
async function findDogecoinValue(){
    try{
        const { data } = await axios.get('https://dolarhoje.com/dogecoin-hoje/');

        const $ = cheerio.load(data);

        const dogecoinValueInRS = $('input').filter('#nacional').attr('value');
        
        return `R$ ${dogecoinValueInRS}`;

    } catch (err) {
        console.log(`ERROR: ${err}`);
    }

    return false;

}

module.exports = findDogecoinValue;
