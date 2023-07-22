const url = 'https://transloc-api-1-2.p.rapidapi.com/agencies.json?callback=call&geo_area=35.80176%2C-78.64347%7C35.78061%2C-78.68218&agencies=12';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1358d6c118msh0237fe50ca1fb06p115756jsn7e85941d6867',
		'X-RapidAPI-Host': 'transloc-api-1-2.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

