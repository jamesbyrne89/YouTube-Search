

const apiKey = 'AIzaSyCvxKvcGQjAot9MZ0lECRZMmiCAQzXZtw8';

const apiUrl = 'https://www.googleapis.com/youtube/v3/search&alt=json';

const results = [];

// Contains info about each search result

const eachVideoDataArr = [];

// Each dataset contained in array
const vidIds = [];
const vidTitles = [];
const vidDescs = [];
const channelNames = [];

$.getJSON(`https://www.googleapis.com/youtube/v3/search?&key=${apiKey}&part=snippet&alt=json&callback=?`, {
	part: 'snippet, id',
	q: 'javascript',
	type: 'video'

},

(data) => {

results.push(...data.items);


const searchBox = document.querySelectorAll('.search-box');


function getVideoData(){
data;
for (let i = 0; i < data.items.length ; i++) {
	eachVideoDataArr.push(results[i].snippet);
	vidIds.push(results[i].id.videoId);
	vidTitles.push(results[i].snippet.title);
	vidDescs.push(results[i].snippet.description);
	channelNames.push(results[i].snippet.channelTitle);
}

}

getVideoData();
console.log(results);
console.log(vidIds);
console.log(vidTitles);
console.log(vidDescs);
console.log(channelNames);
});

function findMatches(searchTerm, results){
//	return results.filter(title);
//	console.log(var1);
		// Figure out if city or state matches search term
		//const regex = new RegExp(searchTerm, 'gi'); 
		//return place.city.match(regex) || place.state.match(regex);
}

