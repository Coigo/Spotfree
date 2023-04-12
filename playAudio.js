const info = [
    {"id":1,"imageUrl":"img/Wellcome to the internet.jpg","path":"musicas/Welcome to the Internet.mp3", "title":"Welcome to the Internet"},
    {"id":2,"imageUrl":"img/We'll meet again.jpg","path":"musicas/We'll Meet Again.mp3", "title":"We'll Meet Again"},
    {"id":3,"imageUrl":"img/Sangue.png","path":"musicas/Sangue.mp3", "title":"Sangue"},
    {"id":4,"imageUrl":"img/PepePls.jpg","path":"musicas/PepePls.mp3", "title":"PepePls"}
    ]

    var lastOnes = [1, 2, 3, 4]
    function setlast(id){
        console.log(id)
        
    }

    
    const playBTN =  document.getElementById('play')
    const audioEl = new Audio
    
    $('#player').on('timeupdate', function() {
        $('#progress').attr("value", this.currentTime / this.duration);
    });

function volumeValue(){
    const Volume = document.getElementById('volume')
    return Volume.value
}

function PlayPause() {
    if (audioEl.paused) {
      audioEl.volume = volumeValue()
      audioEl.play()
    } else {
      audioEl.pause()
    }
  }
  
  function setSong(position) {
   
    const setAudiopath = lastOnes[position]
    var songId = info[position].id
    audioEl.src = setAudiopath
    audioEl.play()
    setlast(songId)
    console.log (setAudiopath)

  }
  
  




