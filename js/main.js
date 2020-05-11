let apiKey = 'api_key=95f8d52cbc2b99c86ee547acfcb1440f';
let apiKeyV4 ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWY4ZDUyY2JjMmI5OWM4NmVlNTQ3YWNmY2IxNDQwZiIsInN1YiI6IjVlOTRiM2I4MWFjMjkyMDAxNWJkN2U3YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VXo9wDEJLfa2LZg3xTSdQUk48P7uIY7Ks5rePUdr5Qo';

function fetchingDbMovie() {
	let url = `https://api.themoviedb.org/3/tv/popular?${apiKey}&language=fr-FR`;
    fetch(url)
    .then((data) => data.json())
    .then((tvShows) => {
		// console.log(tvShows.results[0].overview);
		for (let i = 0; i < tvShows.results.length; i++) {
			document.getElementById('container').innerHTML += `
            <div id='box' class = ${i}>
                <img src = "https://image.tmdb.org/t/p/original/${tvShows.results[i].poster_path}" alt = 'Images de la série '/>
            <div/>`;
		}
		document.querySelectorAll('#box').forEach((box) =>
			box.addEventListener('click', (e) => {
				// console.log('ok !')
				document.getElementById('container').style.backgroundImage = `url("https://image.tmdb.org/t/p/original/${tvShows.results[parseInt(box.className)].backdrop_path}")`;
				overviewModal();
			})
		);

		// function overviewModal() {
		// 	document.getElementById('container').innerHTML += `
        //     <div id='boxOverview' >
        //         <p> ${tvShows.results[parseInt(box.className)].overview} </p>
        //     <div/>`;
        //     console.log(tvShows.results[parseInt(box.className)].overview);
            
		// }
    })
    // .then((overview) =>{
    //     console.log(overview.results)
    // })
}
fetchingDbMovie();
