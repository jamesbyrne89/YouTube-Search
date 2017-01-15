const apiKey = 'AIzaSyCvxKvcGQjAot9MZ0lECRZMmiCAQzXZtw8';

const results = [];

const resultsList = document.querySelector('.results');
const searchInput = document.querySelector('.search-box');
// Each dataset contained in array
const vidIds = [];
const vidTitles = [];
const vidDescs = [];
const channelNames = [];
// const resultsArray = [];


function getJSON(){
	$.getJSON(`https://www.googleapis.com/youtube/v3/search?&key=${apiKey}&part=snippet&alt=json&callback=?`, {
	part: 'snippet, statistics',
	q: `${this.value}`,
	type: 'video',
	maxResults: 20

},
(data) => {
results.push(...data.items);
const nextPageToken = data.nextPageToken;
const prevPageToken = data.prevPageToken;
console.log(results);
getResults(data);

});
}




function getResults(){
	for (let i=0; i < results.length; i++){
		let channelName = results[i].snippet.channelTitle;
		let vidTitle = results[i].snippet.title;
		let vidDesc = results[i].snippet.description;
		let vidThumb = results[i].snippet.thumbnails.medium.url;
		console.log(vidTitle);
	const html = resultsList.appendChild(document.createElement('li'));
		html.innerHTML=( `<img class="thumbnail" src="${vidThumb}">
			<div class="results-vid-info">
			<div class="video-title">${vidTitle}</div>
			<div class="channel-title">${channelName}</div>
			<div class="description">${vidDesc}</div>
			</div>`);
	}
}

		//const videoTitle = video.snippet.title;
		//const channelTitle = video.snippet.channelTitle;





searchInput.addEventListener('change', getJSON);