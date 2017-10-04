module.exports = {
    port: process.env.PORT || 5000,
    mongo: {
        uri: `mongodb://${ process.env.MONGO_USERNAME }:${ process.env.MONGO_PASSWORD }@ds129394.mlab.com:29394/happy-finder`
    },
    googleApiKey: process.env.GOOGLE_API_KEY
};
