
 
  //clientId: '0480722e0b034ad48a91da2dcbac149d',



const songs = [
  { title: "Happy", artist: "Pharrell Williams", trackId: "60nZcImufyMA1MKQY3dcCH" },
  { title: "Can’t Stop The Feeling!", artist: "Justin Timberlake", trackId: "1WkMMavIMc4JZ8cfMmxHkI" },
  { title: "Roar", artist: "Katy Perry", trackId: "6KOEK6SeCEZOQkLj5M1PxH" },
  { title: "Shake It Off", artist: "Taylor Swift", trackId: "5xTtaWoae3wi06K5WfVUUH" },
  { title: "Firework", artist: "Katy Perry", trackId: "4lCv7b86sLynZbXhfScfm2" },
  { title: "Best Day Of My Life", artist: "American Authors", trackId: "4fJ4xA9E84xVY4jyM8c26w" },
  { title: "Count on Me", artist: "Bruno Mars", trackId: "4Ka8UjQ7C6gQio4x7R6Jvp" },
  { title: "Try Everything", artist: "Shakira", trackId: "1K4x9nYcGW2F4S7XxSbf6V" },
  { title: "Brave", artist: "Sara Bareilles", trackId: "7f5trao56t7sB7f14QDTmp" },
  { title: "A Sky Full of Stars", artist: "Coldplay", trackId: "0FDzzruyVECATHXKHFs9eJ" },
  { title: "On Top Of The World", artist: "Imagine Dragons", trackId: "213x4gsFDm04hSqIUkg88w" },
  { title: "Good Time", artist: "Owl City & Carly Rae Jepsen", trackId: "1kPpge9JDLpcj15qgrPbYX" }
];

const grid = document.getElementById("song-grid");
const titleEl = document.getElementById("now-playing-title");
const embedEl = document.getElementById("now-playing-embed");
const prevBtn = document.getElementById("prev-btn");
const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

function embedUrl(trackId) {
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator`;
}

function renderGrid() {
  songs.forEach((song, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "song-card";
    btn.innerHTML = `
      <span class="song-title">${song.title}</span>
      <span class="song-artist">${song.artist}</span>
      <span class="song-play" aria-hidden="true">▶</span>
    `;
    btn.addEventListener("click", () => selectSong(index, true));
    grid.appendChild(btn);
  });
}

function updateActiveCard() {
  const cards = [...document.querySelectorAll(".song-card")];
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === currentIndex);
  });
}

function selectSong(index, autoplay = false) {
  currentIndex = (index + songs.length) % songs.length;
  const song = songs[currentIndex];
  titleEl.textContent = `${song.title} — ${song.artist}`;
  const autoplayFlag = autoplay ? "&autoplay=1" : "";
  embedEl.innerHTML = `<iframe src="${embedUrl(song.trackId)}${autoplayFlag}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
  updateActiveCard();
}

prevBtn.addEventListener("click", () => selectSong(currentIndex - 1, true));
nextBtn.addEventListener("click", () => selectSong(currentIndex + 1, true));
playBtn.addEventListener("click", () => selectSong(currentIndex, true));

renderGrid();
selectSong(0, false);
