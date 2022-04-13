class Services {

	getPosts = (url) => {
		const response = fetch(url).then(response => response.json());
		return response;
	}
}

export default Services;