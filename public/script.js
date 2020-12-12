let btn = document.querySelector('#getWorks');
let result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
	e.preventDefault();
	getData();
})

// получаем данные о работах
async function getData() {
	let res = await fetch('/api/works')

	result.innerHTML = '';

	// обхект с данными
	let data = JSON.parse(await res.json())
	for (i in data)
		result.innerHTML += data[i].title + '<br>'
}