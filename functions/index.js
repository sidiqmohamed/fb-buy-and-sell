const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
    response.status(200).json([{
        id: '123',
        name: 'Old Boat',
        description: 'A very old boat. Bargain price',
        price: 700,
        views: 0,
    }, {
        id: '345',
        name: 'Computer',
        description: 'From the 1990s, a classic!',
        price: 50,
        views: 0,
    }, {
        id: '456',
        name: 'Basketball Hoop',
        description: 'Good condition, free delivery',
        price: 100,
        views: 0,
    }]);

});
