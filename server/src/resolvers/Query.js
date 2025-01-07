function movies() {
	return {
		page: 1,
		totalResults: 10,
		totalPages: 10,
		results: [
			{
				id: 1,
				title: 'Movie title',
				releaseDate: 'Release Date',
				posterPath: 'Path image',
			},
		],
	};
}

module.exports = {
	movies,
};
