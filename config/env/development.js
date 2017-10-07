module.exports = {
    // mongoUri:	'mongodb://localhost/myFirstNode',
    //	or	use	
    mongoUri: 'mongodb://admin:password@localhost:27017/testDB1',
    debug: true,
    sessionSecret: 'dev_secret_key',
    google: {
        clientID: '1071344519454-nc3ta1p57kodvke89ok1qoet6a40rkp1.apps.googleusercontent.com',
        clientSecret: 'q9zwCypVok51FTGkaj8xw-lY',
        callbackURL: 'http://localhost:3000/oauth/google/callback'
    }
}