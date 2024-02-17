const client = require("./config/client");

// importando funções para obter os valores das moedas
const findEthereum = require("./funcsFindCoinsValue/findEthereumValue");
const findBitcoin = require("./funcsFindCoinsValue/findBitcoinValue");
const findDolar = require("./funcsFindCoinsValue/findDolarValue");
const findCardano = require("./funcsFindCoinsValue/findCardanoValue");
const findRipple = require("./funcsFindCoinsValue/findRippleValue");
const findDogecoin = require("./funcsFindCoinsValue/findDogecoinValue");
const findDolarTur = require("./funcsFindCoinsValue/findDolarTurValue");
// const findDate = require('./funcsFindCoinsValue/findDate');

// Função que envia Tweets
const sendTweet = async () => {
    try {
        // const date = findDate();
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

#bitcoin #ethereum #cardano #ripplexrp #dogecoin
        `;
        const send = await client.v2.tweet(tweet);
    } catch (error) {
        console.log(error);
    }
};

sendTweet();
setInterval(sendTweet, 3600000);
