module.exports = class BadRequest extends Error {
    constructor (message, ...args) {
        super(...args);

        this.name = this.constructor.name;
        this.message = message || 'Request did not match resource requirements';
        this.statusCode = 400;
        this.errorCode = 400;
    }
};
