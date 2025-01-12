const axios = require('axios');
const { Movies } = require('./entities/Movies');
const { API_KEY } = require('../../config');

const getPopular = async (page, language) => {
	try {
		const result = await axios.get(
			'https://api.themoviedb.org/3/movie/popular',
			{
				params: { language, page },
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${API_KEY}`,
				},
			}
		);

		return new Movies(result.data);
	} catch (error) {
		console.error('Error fetching popular movies:', error.message);

		throw new Error('Failed to fetch popular movies');
	}
};

const getDetails = (id, language) => {
	try {
		return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
			params: { language },
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${API_KEY}`,
			},
		});
	} catch (error) {
		console.error('Error fetching movie detail:', error.message);

		throw new Error('Failed to fetch movie detail');
	}
};

module.exports = {
	getPopular,
	getDetails,
};
