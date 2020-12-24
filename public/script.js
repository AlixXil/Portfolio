document.addEventListener('DOMContentLoaded', () => {

	let worksOutput = document.querySelector('.works-list');

	getData();

	// получаем данные о работах
	async function getData() {
		let res = await fetch('/api/works')


		// обхект с данными
		if(res.status == 200) {
			let data = JSON.parse(await res.json())
			let worksHTML = '';

			for (i in data)
				worksHTML += addElement(data[i])

			worksOutput.innerHTML = worksHTML;
		}
	}	


	function addElement(data) {
		return `
		<div class="item">
			<img src="${data.img}", alt="${data.title}">
			<div class="item__info">
				<h4 class="item__title">${data.title}</h4>
				
				<span class="item__text">${data.subTitle}</span>
				<a href="${data.link}"," target="_blank" class="item__link">Посмотреть</a>
			</div>
		</div>`;
	}
})

async function saveToFirebase(event) {
	try {
		event.preventDefault()
		var userName = document.getElementById('userName').value.trim();
		var message = document.getElementById('message').value.trim();
		var theme = document.getElementById('theme').value.trim();
		var email = document.getElementById('email').value.trim();
		var msgId =  Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

		if (userName.length > 0) {
			await fetch('/api/addMessage', {
				method: 'POST',
				body: JSON.stringify({userName, message, theme, email, msgId})
			})
		}
		document.getElementById('callbackForm').style.display = 'none';

		document.getElementById('contactsResult').innerHTML = '<p>Ваше сообщение отправлено, в ближайшее время я с Вами свяжусь.</p>';

		console.log('msgId: ' + msgId);
		return false;
	}
	catch(er) {
		console.log(er.message)
	}
};