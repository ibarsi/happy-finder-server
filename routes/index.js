const { NotFound, InternalError } = require('../errors');

module.exports = app => {
    app.use('/api/establishments', require('../api/establishments'));

    app.use((req, res, next) => next(new NotFound()));

    app.use((error, req, res, next) => {
        res.locals.message = error.message;
        res.locals.error = req.app.get('env') === 'development' ? error : {};

        if (error instanceof InternalError || error.statusCode === 500) {
            console.error(error);
        }

        res.status(error.statusCode || 500).json(error);
    });
};
