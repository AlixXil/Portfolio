const express = require('express');
const router = express.Router();
const firebase = require('firebase');


// подключение к firebasse
firebase.initializeApp({
	databaseURL: "https://portfolio-882af.firebaseio.com",
	serviceAccount: "../portfolio-882af-firebase-adminsdk-6c192-58ed2d06ad.json",
});


router.get('/works', (req, res) => {
	firebase.database(firebase.app()).ref('works/').once('value').then((res) =>{
		if(res.exists()) {
			let data = res.val();
			console.log(data)
		}
		else console.log("error")
	})
})

module.exports = router;
