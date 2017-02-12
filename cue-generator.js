fs = require('fs');
fs.readFile("./songs.json", function(err, data) {
	var songs = JSON.parse(data);
	for (i in songs) {
		var song = songs[i];
		var index = i + 1;
		console.log("\tTRACK "+i+" AUDIO")
		console.log("\t\tTITLE "+ song.Song);
		console.log("\t\tPERFORMER "+ song.Artist);
		console.log("\t\tINDEX 01 " + song["Start In Playlist"]);
	}
});
