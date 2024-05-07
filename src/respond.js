const showActiveQuotation = require('./services/showActiveQuotation.js');
const showQuoteRequests = require('./services/showQuoteRequests.js');
const showPayments = require('./services/showPayments.js');
const connect = require('./services/connect.js');
const { homeOptions } = require('./home.js');

const respond = (data) => {
    switch (data.selectedOption) {
        case homeOptions.active_quotation:
            showActiveQuotation(data);
            break;
        case homeOptions.quote_requests:
            showQuoteRequests(data);
            break;
        case homeOptions.payments:
            showPayments(data);
            break;
        case homeOptions.connect:
            connect(data);
            break;
        default:
            console.log('No option selected');
    }
};

module.exports = respond;
