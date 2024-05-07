
const homeOptions = {
    active_quotation: "active_quotation",
    quote_requests: "quote_requests",
    payments: "payments",
    connect: "connect"
};

const homeKeyboard = [
    [{ text: 'Show Active Quotation', callback_data: homeOptions.active_quotation }],
    [{ text: 'Show Quote Requests', callback_data: homeOptions.quote_requests }],
    [{ text: 'Payments', callback_data: homeOptions.payments }],
    [{ text: 'Connect Again', callback_data: homeOptions.connect }]
];

module.exports = { homeOptions, homeKeyboard };
