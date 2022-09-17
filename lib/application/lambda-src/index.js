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
        emojis: ['🚀', '🚀', '🚀', '🚀', '🚀'],
        fire: ['🔥', '🔥', '🔥', '🔥', '🔥'],
    };
};

// {
//     version,
//     account,
//     region,
//     time: moment().format('YYYY MM DD, HH:mm Z'),
//     requestId: (event.context.requestId) || 'Missing requestId',
//     emojis: ['🚀', '🚀', '🚀', '🚀', '🚀'],
//     fire: ['🔥', '🔥', '🔥', '🔥', '🔥'],
//     process: JSON.stringify(process.env),
//     dev: 'https://inn1w9lfp5.execute-api.us-east-2.amazonaws.com/v1/',
//     stage: 'https://dxb74jzceb.execute-api.us-east-1.amazonaws.com/v1/',
//     prod1: 'https://xtpsurqzqi.execute-api.us-west-1.amazonaws.com/v1/',
//     prod2: 'https://nxj8ejqqda.execute-api.ca-central-1.amazonaws.com/v1/',
//     aws_lambda_log_group: process.env.AWS_LAMBDA_LOG_GROUP_NAME
// };
