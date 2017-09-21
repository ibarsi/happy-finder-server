module.exports = app => {
    app.use('/api/establishments', require('../api/establishments'));

    app.use((req, res) => {
        res.sendStatus(404);
    });

    app.use((err, req, res) => {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        res.sendStatus(err.status || 500);
    });
};
