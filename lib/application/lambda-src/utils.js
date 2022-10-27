const getEnv = (region) => {
    const regionEnvMap = {
        'us-east-2': 'Development',
        'us-east-1': 'Stage',
        'us-west-1': 'Production 1',
        'ca-central-1': 'Production 2',
    }
    return regionEnvMap[region];
}

module.exports = {
    getEnv
}