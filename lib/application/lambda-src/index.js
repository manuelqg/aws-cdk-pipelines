const moment = require('moment');

const version = process.env.VERSION;
const account = process.env.ACCOUNT;
const region = process.env.AWS_REGION;

exports.handler = async (event) => {
    /**
     * Basic API response function.
     * Includes moment to demonstrate use of npm modules in build.
     * @param {object} context
     * @param {string} context.requestId
     */
    console.log('Event: ', JSON.stringify(event));
    return {
        requestId: (event.context.requestId) || 'Missing requestId',
        emojis: ['🚀', '🚀', '🚀', '🚀', '🚀'],
        fire: ['🔥', '🔥', '🔥', '🔥', '🔥']
    };
}




