// Função para pegar a data atual.

function findDate(){
    var newDate = new Date();
    newDate.toLocaleDateString({ timeZone: 'BRT' });

    var date = newDate.getDate();
    var month = newDate.getMonth();
    var year = newDate.getFullYear();

    var hour = newDate.getHours();
    var minute = newDate.getMinutes();

    return `${hour}:${minute}h`;
    
}
module.exports = findDate;

// console.log(findDate())