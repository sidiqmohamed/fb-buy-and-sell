const firebase = require('firebase');
require('firebase/firestore');

//const { reservations, restaurants, dateAvailabilities, reviews } = require('./testData');
const { fakeListings, fakeMyListings } = require('./fake-data');


var firebaseConfig = {
    apiKey: "AIzaSyAn_WQHFfM9fEq4ZPkxDHT0PheSRSKBUh0",
    authDomain: "fb-buy-and-sell.firebaseapp.com",
    databaseURL: "https://fb-buy-and-sell.firebaseio.com",
    projectId: "fb-buy-and-sell",
    storageBucket: "fb-buy-and-sell.appspot.com",
    messagingSenderId: "344743767504",
    appId: "1:344743767504:web:5627664f697ea019ed9dd5"
  };
  
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  function populateCollection(collectionName, items) {
      return Promise.all(items.map(item => {
          const { id, ...data } = item;
          return db.collection(collectionName)
            .doc(id)
            .set(data);
      }));
  }

  Promise.all([
    //   populateCollection('reservations', reservations),
    //   populateCollection('reviews', reviews),
      populateCollection('fakeListings', fakeListings),
      populateCollection('fakeMyListings', fakeMyListings),
  ])
  .then(() => {
      console.log('Done!');
      process.exit(0);
  })
  .catch(err => {
      console.log(err);
  });