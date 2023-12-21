console.log('Running assignment...');

const transactions = require('./simple-transaction-data').data;

// Assignment 1:
const filterFunction = (data) => {
    return data.filter((item) => {
        return item.credit_card_company === 'VISA'
        && item.price >= 50
        && new Date(item.transaction_date).getFullYear() >= 2015;
        // year can also be found with the following:
        // item.transaction_date.split('-')[0]
    });
}

// Assignment 2:
const aboveAverageFunction = (data) => {
    const total = data.reduce((accumulator, current) => {
        accumulator += parseInt(current.price)
        return accumulator;
    }, 0);
    
    const average = total / data.length;

    return data.map(item => {
        return {
            ...item,
            isPriceAboveAverage: item.price > average
        }
    });
}
