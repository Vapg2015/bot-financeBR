// Função para pegar a data atual.

function findDate(){
    var newDate = new Date();
    newDate.toLocaleDateString({ timeZone: 'BRT' });

    var date = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();

    var hour = newDate.getHours();
    var minute = newDate.getMinutes();

    return `${date >= 10 ? date : `0${date}`}/${month >= 10 ? month : `0${month}`}/${year} ${hour}:${minute}h`;
    
}
module.exports = findDate;