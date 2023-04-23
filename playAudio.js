const info = [
    {"id":1,"imageUrl":"img/Wellcome to the internet.jpg","path":"musicas/Welcome to the Internet.mp3", "title":"Welcome to the Internet"},
    {"id":2,"imageUrl":"img/We'll meet again.jpg","path":"musicas/We'll Meet Again.mp3", "title":"We'll Meet Again"},
    {"id":3,"imageUrl":"img/Sangue.png","path":"musicas/Sangue.mp3", "title":"Sangue"},
    {"id":4,"imageUrl":"img/PepePls.jpg","path":"musicas/PepePls.mp3", "title":"PepePls"}
  ]

  const buttonPlay = document.querySelector('#play')
  const audioEl = new Audio
  var VolumeBeforeMuted 
  var currentMusic
  var Volume
    
    $('#player').on('timeupdate', function() {
      $('#progress').attr("value", this.currentTime / this.duration);
    });



function updateVolumeValue(){
    Volume = document.getElementById('volume').value
    audioEl.volume = Volume
    VolumeBeforeMuted = Volume
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('volume').addEventListener("input", updateVolumeValue())
})



function PlayPause() {
    if (audioEl.paused) {

      audioEl.play()
      buttonPlay.innerHTML = '<i class="fa-solid fa-circle-pause fa-xl" style="color: #ffffff;"></i>'
      SetCurrentTime()

    } else {
      audioEl.pause()
      buttonPlay.innerHTML = '<i class="fa-solid fa-circle-play fa-xl"></i>'


    }
  }
  


  function setSong(position) {
   
    currentMusic = position
    const setAudiopath = info[position].path
    audioEl.src = setAudiopath
    audioEl.play()
    buttonPlay.innerHTML = '<i class="fa-solid fa-circle-pause fa-xl" style="color: #ffffff;"></i>'
    SetCurrentTime()



  }





  let timeoutId;

  function SetCurrentTime() {
    const audio = audioEl.buffered;
  
    if (audioEl.paused) {
      return;
    }
  
    if (audio.length) {
      const BarPercentage = 100 * audioEl.currentTime / audioEl.duration
      console.log(BarPercentage)
      SetProgressBarSize(BarPercentage)
    }
  
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
  
    timeoutId = setTimeout(SetCurrentTime, 500)
  }



function SetProgressBarSize(Percentage) { 
    const progressed = document.getElementById('progressed')
    progressed.style.width = `${Percentage}%`
}



function next() {
  var nextMusic = currentMusic + 1
  setSong(nextMusic)
}
audioEl.addEventListener("ended", next)
document.getElementById("next").addEventListener("click", next)

function previous() {
  var previousMusic = currentMusic - 1
  setSong(previousMusic)
}
document.getElementById("previous").addEventListener("click", previous)



function momento(percentage) {
  const percentageInSecs = percentage * audioEl.duration / 100
  audioEl.currentTime = percentageInSecs
}
function Mute() {
  //trocar entre mutado e nao mutado
  //mutado, coloca  o audio como zero, e muda o icone pra mutado
  //chama a função updatevolume 
  let MuteBTN = document.querySelector("#muteBTN")

  if (Volume > 0) {
    Volume = 0
    MuteBTN.innerHTML = '<i class="fa-solid fa-volume-xmark fa-lg"></i>'
  }
  else if (Volume == 0) {
  Volume = VolumeBeforeMuted
  MuteBTN.innerHTML = '<i class="fa-solid fa-volume-high fa-lg"></i>'
  } 
  audioEl.volume = Volume
}