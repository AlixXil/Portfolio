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

