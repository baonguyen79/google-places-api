$(document).ready(() => {
	const apiKey = "";

	$("body").on("click", "li", (e) => {
		loadAPIRequest(e.target.innerHTML).then((data) => {
			let info = data.results;
			for (let i = 0; i < info.length; i++){
				console.log(info[i].name);
			}
		}).catch((error) => {
			console.log(error);
		});
	});

	const loadAPIRequest = (dropdownType) => {
		return new Promise ((resolve, reject) => {
			$.ajax(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=36.174465,-86.767960&radius=50000&type=${dropdownType}&key=${apiKey}`).done((data) => resolve(data))
				.fail((error) => reject(error));
		});
	};




});