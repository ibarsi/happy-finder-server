const NotFound = require('../errors/not-found');

module.exports = app => {
    app.use('/api/establishments', require('../api/establishments'));

    app.use((req, res, next) => next(new NotFound()));

    app.use((err, req, res, next) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.status(err.statusCode || 500).json(err);
    });
};
