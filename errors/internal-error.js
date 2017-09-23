module.exports = class InternalError extends Error {
    constructor(exception, ...args) {
        super(...args);

        const isMessage = typeof exception === 'string';

        this.name = this.constructor.name;
        this.message = isMessage ? exception : 'Internal exception has been thrown';
        this.statusCode = 500;
        this.errorCode = 500;

        if (!isMessage) {
            this.innerException = exception;
        }
    }
};
