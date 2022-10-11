import axios from 'axios';

const matchesDB = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
	headers: {
		'X-RapidAPI-Key': '38a547cccc51186a8824dccfb35e0138',
		'X-RapidAPI-Host': 'v3.football.api-sports.io',
	},
});


export default matchesDB;