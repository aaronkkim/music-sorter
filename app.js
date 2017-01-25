function ItunesController() {
    var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    this.getMusic = function getMusic(e) {
        e.preventDefault();
        var artist = e.target.artist.value;
        itunesService.getMusicByArtist(artist).then(drawSongs);
    }
    if (window.location.href.includes("localhost")) {
        itunesService.getMusicByArtist("nelly").then(drawSongs);
    }
    function drawSongs(songList) {

        console.log(songList);
        // This is where you task begins
        var songInfo = []
        var template = ``
        var songInfo = document.getElementById("songs")
        for (var i = 0; i < songList.length; i++) {
            var song = songList[i];

            template += `
          
            
                    <div class="col-sm-4">
                        <div class="track panel panel-primary">
                             <div class="panel-heading"style ="background-image:url(${song.albumArt})">   
                             </div>
                             <div class="panel-body">
                                <p>${song.title}</p>
                                <p>${song.artist}</p>
                                <p>${song.collection}</p>
                                <p>${song.price}</p>
                                <button class= "btn btn-primary" onclick = "itunesCtrl.playSong('song${i}')">play</button>
                                <button class= "btn btn-danger" onclick = "itunesCtrl.pauseSong('song${i}')">pause</button>
                                <audio id ="song${i}"  preload="none">
                                    <source src="${song.preview}" type="audio/mp4">
                                </audio>
                             </div>
                        </div>
                    </div> 
            `








            // songInfo.innerHTML+= `<li><img src ="${song.albumArt}"width="auto"></li>`

            // songInfo.innerHTML += `<li>  "${song.collection}"  </li>`
            // songInfo.innerHTML += `<li> "${ song.price}" </li>`
            // songInfo.innerHTML += `<audio src = "${song.preview}"></audio></ul>`
        }

        songInfo.innerHTML = template
    }
    this.playSong = function (element) {
       currentSong = currentSong || document.getElementById('song0')
        currentSong.pause()
        currentSong = document.getElementById(element)
        currentSong.play()

    }
    var currentSong;
this.pauseSong = function (element){
    currentSong.pause()

}



}





var itunesCtrl = new ItunesController()
