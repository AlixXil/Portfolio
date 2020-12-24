const express = require('express');
const router = express.Router();
const firebase = require('firebase');


// подключение к firebasse
firebase.initializeApp({
	databaseURL: "https://portfolio-882af.firebaseio.com",
	serviceAccount: "../portfolio-882af-firebase-adminsdk-6c192-58ed2d06ad.json",
});

// обработка запроса работ из портфолио
router.get('/works', (req, response) => {
	try {
		firebase.database(firebase.app()).ref('works/').once('value').then((res) =>{
			if(res.exists()) {
				let data = res.val();
				console.log("запрос списка работ");
				response.json(JSON.stringify(data));
			}
			else {
				console.log("error")
				response.status(500).end()
			}
		})
	}
	catch {
		response.status(500).end()
	}
})

// добавление сообщения
router.post('/addMessage', (req, res) => {
	console.log('work')
	res.end();
})

function writeMessageData(msgId, name, email, subject, message) {
	firebase.database().ref('messages/' + msgId).set({
		username: name,
		email: email,
		subject: subject,
		message: message
	});
};

module.exports = router;
