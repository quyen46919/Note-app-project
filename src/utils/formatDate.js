export const formatDate = (date) => {
    var covertDate = date.split('-');
    return covertDate[2].toString().slice(0, 2) + '/' + covertDate[1] + '/' + covertDate[0];
};