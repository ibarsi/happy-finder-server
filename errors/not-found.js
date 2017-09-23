module.exports = class NotFound extends Error {
    constructor(message, ...args) {
        super(message, ...args);

        this.name = this.constructor.name;
        this.message = message || 'The requested resource couldn\'t be found';
        this.statusCode = 404;
        this.errorCode = 404;
    }
};
