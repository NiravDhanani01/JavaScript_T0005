let songList = [
  {
    name: "Deka tenu paheli paheli bar",
    url: "https://www.pagalworld.com.sb/files/download/type/64/id/71184",
  },
  {
    name: "Heeriye",
    url: "https://www.pagalworld.com.sb/files/download/type/64/id/67444",
  },
  {
    name: "Nadaniya Nadaniya...",
    url: "https://www.pagalworld.com.so/files/download/id/21270",
  },
  {
    name: "Gulabi sadi",
    url: "https://www.pagalworld.com.sb/files/download/type/64/id/70836",
  },
];
let currentSong = 0;
let isShuffle = false;

let playBtn = document.querySelector("#play");
let pauseBtn = document.querySelector("#pause");
let playSongImg = document.querySelector("#playSongImg");
let stopSongImg = document.querySelector("#stopSongImg");
let song = document.querySelector("#audioPlayer");
let playbar = document.querySelector("#playbar");
let shuffleOff = document.querySelector("#shuffleOff");
let shuffleOn = document.querySelector("#shuffleOn");

playBtn.addEventListener("click", playSong);
pauseBtn.addEventListener("click", pauseSong);
song.addEventListener("timeupdate", TimeUpdate);
song.addEventListener("ended", songEnd);
playbar.addEventListener("input", songForwarding);

function playSong() {
  song.setAttribute("src", `${songList[currentSong].url}`);
  song.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
  stopSongImg.style.display = "none";
  playSongImg.style.display = "block";

  document.querySelector(
    "#songName"
  ).innerHTML = `<marquee>${songList[currentSong].name}</marquee>`;
}

function pauseSong() {
  song.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  stopSongImg.style.display = "block";
  playSongImg.style.display = "none";
}

function backwardSong() {
  if (isShuffle) {
    shuffleOffSong();
  } else {
    if (currentSong === 0) {
      currentSong = songList.length - 1;
    } else {
      currentSong--;
    }
  }
  playSong();
}

function forwardSong() {
  if (isShuffle) {
    shuffleOffSong();
  } else {
    if (currentSong === songList.length - 1) {
      currentSong = 0;
    } else {
      currentSong++;
    }
  }
  playSong();
}

function TimeUpdate() {
  let running = (song.currentTime / song.duration) * 100;
  playbar.value = running;
}

function songForwarding() {
  let forwarding = (playbar.value / 100) * song.duration;
  song.currentTime = forwarding;
}

function stopSong() {
  song.pause();
  song.currentTime = 0;
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
  stopSongImg.style.display = "block";
  playSongImg.style.display = "none";
}

function songEnd() {
  forwardSong();
}

function addSong() {
  let songName = document.querySelector("#Name").value;
  let songUrl = document.querySelector("#songUrl").value;
  if (songUrl || songName) {
    let obj = {
      name: songName,
      url: songUrl,
    };
    songList.push(obj);
    DisplayPlaylist();
    document.querySelector("#songUrl").value = "";
    document.querySelector("#Name").value = "";
  }
}

function DisplayPlaylist() {
  let playlist = document.querySelector("#playlist");
  let list = "";
  songList.map((song, i) => {
    list += `
    <div class="displaylist"> 
    <li onclick="playdirect(${i})" >${songList[i].name}</li>
    <span onclick="DeleteItem(${i})">Del</span>
    </div>
    `;
  });
  playlist.innerHTML = list;
}
function playdirect(i) {
  currentSong = i;
  playSong();
}
function DeleteItem(i) {
  songList.splice(i, 1);
  DisplayPlaylist();
}
DisplayPlaylist();

function shuffleOffSong() {
  isShuffle = true;
  shuffleOff.style.display = "none";
  shuffleOn.style.display = "block";
  let nextSong = Math.floor(Math.random() * songList.length);
  currentSong = nextSong;
}

function shuffleOnSong() {
  isShuffle = false;
  shuffleOff.style.display = "block";
  shuffleOn.style.display = "none";
}
