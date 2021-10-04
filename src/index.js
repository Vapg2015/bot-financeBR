// importando funções para obter os valores das moedas
const findEthereum = require('./funcsFindCoinsValue/findEthereumValue');
const findBitcoin = require('./funcsFindCoinsValue/findBitcoinValue');
const findDolar = require('./funcsFindCoinsValue/findDolarValue');
const findCardano = require('./funcsFindCoinsValue/findCardanoValue');
const findRipple = require('./funcsFindCoinsValue/findRippleValue');
const findDogecoin = require('./funcsFindCoinsValue/findDogecoinValue');
const findDolarTur = require('./funcsFindCoinsValue/findDolarTurValue');
// const findDate = require('./functions/findDate');

// Importando Twit e dotenv
var twit = require("twit");
require("dotenv").config();

// Inicializando o BOT
const bot = new twit({
    consumer_key: process.env.CONSUMER_KEY,

    consumer_secret: process.env.CONSUMER_SECRET,
    access_token: process.env.ACCESS_TOKEN,

    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
});

// Função que envia Tweets
async function sendTweet(send=true){
    //const date = findDate();

    const bitcoinValue = await findBitcoin();
    const dolarValue = await findDolar();
    const ethereumValue = await findEthereum();
    const cardanoValue = await findCardano();
    const rippleValue = await findRipple();
    const dogecoinValue = await findDogecoin();
    const dolarTurValue = await findDolarTur();

    //Conteudo do post que vai ser enviado
    let tweet = `

     ⏳ Atualização a cada hora\n\n

     🪙 1 BTC - ${bitcoinValue}
     💎 1 ETH - ${ethereumValue}
     ❈  1 ADA - ${cardanoValue}
     ✖️ 1 XRP - ${rippleValue}
     🐶 1 DOGE - ${dogecoinValue}

     💵 1 US$ - ${dolarValue}
     ✈️ 1 US$ Tur - ${dolarTurValue}\n\n

     #bitcoin #ethereum #cardano #ripplexrp #dogecoin #dollar
    
    `;

    if(send){
        bot.post('statuses/update', {status: tweet}, (err, data, response) => {
            console.log("Dados: ", data);
        });
    } else {
        console.log('O Tweet não será enviado');
    }

}


sendTweet();
setInterval(sendTweet, 3600000);