const configuration = JSON.parse(require('fs').readFileSync('config.json'))

module.exports = {
    configuration: configuration
}