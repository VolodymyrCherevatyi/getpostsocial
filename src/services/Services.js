class Services {
	getResourse = (url, method="GET", data=null,) => {
		return fetch(url, {
			method: method,
			headers: { "Content-type": "application/json" },
			body: data
		}).then((response) => response.json());
		
	};
}

export default Services;


// return fetch(url, {
// 	method: "POST",
// 	headers: { "Content-type": "application/json" },
// 	body: data,
// })


// delPost = (url, id) => {
// 	return fetch(`${url}${id}`, {
// 		method: "DELETE"
// 	})
// 		.then((response) => response.json())
// 		.then(console.log('Ok'));
// };
