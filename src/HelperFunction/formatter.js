export default function currencyFormatter(value) {
    const defaultOptions = {
        significantDigits: 2,
        thousandsSeparator: '.',
        decimalSeparator: ', ',
        symbol: ''
    };

    if (typeof value !== 'number') value = 0.0
    let options = {};
    options = { ...defaultOptions, ...options };
    value = value.toFixed(options.significantDigits)
    
    const [currency, decimal] = value.split('.')
    return `${options.symbol} ${currency.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        options.thousandsSeparator
    )}`
};