// DOM Elements
const homePage = document.getElementById("homePage");
const songDetailPage = document.getElementById("songDetailPage");
const playerPage = document.getElementById("playerPage");
const songListElement = document.getElementById("songList");

const backToHomeFromDetailBtn = document.getElementById(
  "backToHomeFromDetailBtn"
);
const backToHomeBtn = document.getElementById("backToHomeBtn");
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector(
  ".video-background-container"
);
const backgroundVideo = document.getElementById("backgroundVideo");

const detailAlbumArt = document.getElementById("detailAlbumArt");
const detailTrackTitle = document.getElementById("detailTrackTitle");
const detailTrackArtist = document.getElementById("detailTrackArtist");
const detailAlbumName = document.getElementById("detailAlbumName");
const playFromDetailBtn = document.getElementById("playFromDetailBtn");

const audioPlayer = document.getElementById("audioPlayer");
const albumArtPlayer = document.getElementById("albumArt");
const playerTrackTitle = document.getElementById("playerTrackTitle");
const playerTrackArtist = document.getElementById("playerTrackArtist");
const lyricsContainer = document.getElementById("lyricsContainer");

const playerProgressBarContainer = document.getElementById(
  "playerProgressBarContainer"
);
const playerProgressBar = document.getElementById("playerProgressBar");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerTotalDuration = document.getElementById("playerTotalDuration");

const playerPrevBtn = document.getElementById("playerPrevBtn");
const playerPlayPauseBtn = document.getElementById("playerPlayPauseBtn");
const playerNextBtn = document.getElementById("playerNextBtn");
const playerRepeatBtn = document.getElementById("playerRepeatBtn");
const playerShuffleBtn = document.getElementById("playerShuffleBtn");
const playerVolumeSlider = document.getElementById("playerVolumeSlider");
const playerSpeedSlider = document.getElementById("playerSpeedSlider");
const currentSpeedDisplay = document.getElementById("currentSpeedDisplay");

let songs = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    albumArtUrl:
      "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
    audioSrc: "audio/Ed Sheeran - Perfect.mp3",
    videoBgSrc: "videos/perfect_bg.mp4",
    lyrics: [
      { time: 2.9, text: "I found a love for me" },
      { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
      { time: 18, text: "I found a girl, beautiful and sweet" },
      { time: 25, text: "I never knew you were the someone waiting for me" },
      { time: 32, text: "'Cause we were just kids when we fell in love" },
      { time: 36.7, text: "Not knowin' what it was" },
      { time: 40.5, text: "I will not give you up this time" },
      { time: 48, text: "But, darlin', just kiss me slow" },
      { time: 51.6, text: "Your heart is all I own" },
      { time: 55.9, text: "And in your eyes, you're holdin' mine" },
      {
        time: 62.3,
        text: "Baby, I'm dancing in the dark with you between my arms",
      },
      {
        time: 73.6,
        text: "Barefoot on the grass, listening to our favorite song",
      },
      {
        time: 80.9,
        text: "When you said you looked a mess, I whispered underneath my breath",
      },
      { time: 88, text: "But you heard it, darling, you look perfect tonight" },
    ],
  },
  {
    id: 2,
    title: "Em đừng khóc",
    artist: "Chillies",
    album: "Trên những đám mây",
    albumArtUrl:
      "https://images.genius.com/cb364cfba77cdc981cd52f21259e340d.1000x1000x1.jpg",
    audioSrc: "audio/Em Đừng Khóc - Chillies (Official Music Video).mp3",
    videoBgSrc: "videos/Em Đừng Khóc - Chillies (Official Music Video).mp4",
    lyrics: [
      {
        text: `Tối em vội lên trên chuyến xe về nơi thiên đường
Mắt em chợt cay khi nhớ một người từng thương
Kính xe vừa thay áo mới sau cơn mưa rào
Tay em vội lau những xót xa trên má đào
Em đừng khóc
Nếu tình mình chưa thành hình hài em đừng khóc
Nếu mình hẹn không ngày gặp lại em đừng khóc
Nếu ta chưa thấy được cầu vồng sau nhiều cơn mưa
Em đừng khóc
Nếu một ngày không là nụ cười em đừng khóc
Nếu lòng mình đau vì một người em đừng khóc
Tối nay lại là đêm trắng em nằm yên trong phòng
Mắt em là mây xuôi đến chân trời hừng đông
Đếm theo một hai ba bốn không còn ai và em nghe tim mệt nhoài
Tính xem thời gian em có bao nhiêu còn lại
Em đừng khóc
Nếu tình mình chưa thành hình hài em đừng khóc
Nếu mình hẹn không ngày gặp lại em đừng khóc
Nếu ta chưa thấy được cầu vồng sau nhiều cơn mưa (sau nhiều cơn mưa)
Em đừng khóc
Nếu một ngày không là nụ cười em đừng khóc
Nếu lòng mình đau vì một người em đừng khóc
Và em đừng khóc
Em đừng khóc
Nếu tình mình chưa thành hình hài em đừng khóc
Nếu mình hẹn không ngày gặp lại em đừng khóc
Nếu ta chưa thấy được cầu vồng sau nhiều cơn mưa
Em đừng khóc (khóc)
Nếu một ngày không là nụ cười em đừng khóc (khóc)
Nếu lòng mình đau vì một người em đừng khóc
Và em đừng khóc
Em đừng khóc
Nếu tình mình chưa thành hình hài em đừng khóc
Nếu mình hẹn không ngày gặp lại em đừng khóc
Nếu ta chưa thấy được cầu vồng sau nhiều cơn mưa (sau nhiều cơn mưa)
Em đừng khóc (khóc)
Nếu một ngày không là nụ cười em đừng khóc (khóc)
Nếu lòng mình đau vì một người em đừng khóc
Và em đừng khóc`,
      },
    ],
  },
  {
    id: 3,
    title: "Bonjour hi",
    artist: "Running man",
    album: "fanmeeting",
    albumArtUrl:
      "https://s.mxmcdn.net/images-storage/albums5/3/5/5/5/6/0/46065553_350_350.jpg",
    audioSrc: "audio/Bonjour, Hi (봉주르 하이) (feat. YOONMIRAE(윤미래)) - Release (youtube).mp3",
    videoBgSrc: "videos/Bonjour, Hi (봉주르 하이) (feat. YOONMIRAE(윤미래)) - Release (1080p, h264, youtube).mp4",
    lyrics: [
      {
        text: `Yo!
일요일마다 열리는 파티 다섯 시에
어딜 가든 사람들 난리, hey, where you at?
나이 성별 아무 상관없지 하지 마 너의 마음 덧칠
땀으로 다 씻어 내줄게 느껴봐 여기 열기
어쩜 날아가 버리는가 싶어 마치 열기구
진짜 재미를 아는 사람은 여기로
Huh 심호흡해 시합이 아님 신남
준비해 세찬이 형이 시작
볼륨을 높여 빨리 더 텐션을 올려, ay
물폭탄으로 뜨거운 온몸을 적셔, ay
학업에 지친 또 사랑에 삐친
어제 탓에 스트레스 받고 있는 사람 너
향수 뿌리고 고고고 예
깔창을 깔고 고고고 예
뛰는 법을 몰라 답답하지 원
내가 솔루션을 해줄게 너의 백종원
멈추지 말고 keep runnin′, runnin' like
봉주르 하이 봉주르 하이
날 보면 반갑게 인사해줘 like
봉주르 하이 봉주르 하이
멈추지 말고 keep runnin′, runnin' like
봉주르 하이 봉주르 하이
날 보면 반갑게 인사해줘 like
봉주르 하이 봉주르 하이
chorus
Run it, run it, run it my way 모두 같이
Run it, run it, run it your way, we gon' always
Run it, run it, run it our way 모두 같이
Run it, run it, run it our way, we gon′ always
verse
신발 끈 풀리면 넘어져 조심해
결승점 숨이 차올라도 욕심내
승패와 상관없이 직구를 던져
오늘은 홈런의 예감 펜스를 넘겨
오늘 밤 나의 예감 완전 뭔가 될 것 같은 기분
아웃 되기 싫음 지켜 이름표
주위 눈치 보지 말고 아무 생각 하지 말고
마흔부터 칠순까지 달려 송지효
내가 가장 빛이 날 때 함께였던 너
너가 가장 빛이 날 때 함께였던 우리
나에겐 그 빛났던 순간들이
지키게 해줬어, 아름다운 품위
어쩌면 일부이자 전부였던 달리기 시간
함께 뛰어준 모두에게 고맙고 미안
기억이 더 진했으면 해
추억의 향이 더 오래 남아 향기에 웃을 수 있게
chorus
Run it, run it, run it my way 모두 같이
Run it, run it, run it your way, we gon′ always
Run it, run it, run it our way 모두 같이
Run it, run it, run it our way, we gon' always
verse
언제나 여기서 다시 만나
가벼운 걸음 지효는 나비 같아
언제나 여기서 다시 만나
기분 업 된 세찬은 아이 같아
언제나 여기서 다시 만나
효찬 공원에서 기다려 어서 나와
언제나 여기서 다시 만나
우리 인사는 봉주르 하이 (봉주르 하이)
chorus
Run it, run it, run it my way 모두 같이
Run it, run it, run it your way, we gon′ always
Run it, run it, run it our way 모두 같이
Run it, run it, run it our way, we gon' always`,
      },
    ],
  },
   {
    id: 4,
    title: "I like it",
    artist: "Running man",
    album: "fanmeeting",
    albumArtUrl:
      "https://s.mxmcdn.net/images-storage/albums5/3/5/5/5/6/0/46065553_350_350.jpg",
    audioSrc: "audio/I like it (좋아) - Release (youtube).mp3",
    videoBgSrc: "videos/I like it (좋아) - Release (1080p, h264, youtube).mp4",
    lyrics: [
      {
        text: `cheot mannamui sujubeun seolleim
amugeotdo anideon uri
haru haru keujeo apman bogo dallyeosseo
hamkkein jeok eopdago haetjiman
nae mameun eonjena neol saenggakhae
hamkkeyeoseo yeogikkaji oge doen geoya
mianhae naneun marya
jalhaneun ge hana eopseo
hajiman waenji neowa isseumyeon
da hal su isseul geot gata

ijen naega ne pyeoni dwae julke
(modu hearil sun eopjiman)
jogeum deo gakkai kidaebollae
neol johahanikka...himgyeoun
oneuldo tto nae ildo
Gwaenchana himeul nae
neowa hamkke dallil keoya

yoksim jaengijiman naetmulboda
gipeun Seokjini hyung
ibi baekdusan jangnankkureogi
Jaeseoki hyung
nangmanjumeok neungryeokja Jongkook
pyoryuhaneun paesyeonwang Haha
jel yeppeun Song maheun Jihyo
kwiyeoun dorai Somin
akkineun gaegeumaen hubae Kwangsoo hyung
sammiteo keugil keurigo Yang Sechan
(keureohke urin hanaga doen geoya)

ijen naega ne pyeoni dwae
julke(modu hearil sun eopjiman)
jogeum deo gakkai kidaebollae
neol johahanikka...himgyeoun
oneuldo tto naeildo
Gwaenchana himeul nae
neowa hamkke dallil keoya

nal mideo nal midji ma
neol ohaehan sigandeul
keuraeseo deo bitnadeon urireul gieokhae
nege julke seotun nae maeumeul
(ireohke nan neoreul saranghae)

eonjen ganeun uri i georeumeul
meomchuneun keu nare...cham
komawosseosseo nan neoyeosseo
nuni busidorok nunmul nadeon nal
biga ssodajyeodo useul su itdeon nal

modeun nari pposong pposonghae joha`,
      },
    ],
  },
  {
    id: 5,
    title: "an't Breakup Girl Can't Breakaway Boy",
    artist: "Lee Sang",
    album: "",
    albumArtUrl:
      "https://i1.sndcdn.com/artworks-000109959073-z72mok-t500x500.jpg",
    audioSrc: "audio/LeeSSang feat JUNG IN - Can't Breakup Girl Can't Breakaway Boy (Color Coded Lyrics_가사 Han__Rom__Eng) - Luscious Box (youtube).mp3",
    videoBgSrc: "videos/Monday Couple 송지효宋智孝_강개리 Gary - Turned off the TV - Running Man Race Start 3 fanmeeting in Hong Kong - SkySharing (1080p, h264, youtube).mp4",
    lyrics: [
      {
        text: `heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no
heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

urin sambaengmanwonjjari
junggocharo hamkke
eodideun danyeotji nambureopji anke
paljjangeul kkigo hanjangui
sajine chueogeul damgo
bamjameul seolchyeogamyeo
seororeul aragago
nae kkumeun neoui miraega doeeo
urin seororeul ttareuneun
hanssangui areumdaun saeyeosseo
chaewojyeodo bujokhaetdeon sarang
dasi taeeonado mannagopeun saram
hajiman sewol apeseoneun yeoksi
seoroui yoksimeul igiji motae
yoksire hollo anja uneun neoui ureum sori
nareul ssoaboneun nunchori
nari galsurok deo nan tto
ibyeoreul saenggakhae harujongil

taeyangeun tteugeounde
ni mameun eoreoinne
nuguui jalmosinji
saranghagin haneunde baby
modeunge geudaeronde
urineun byeonhaeinne
nuguui jalmosinji
saranghagin haneunde baby

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

ttaeron neomuna bappa neoege mianhae
jigabe doneul chaeugo siganeul nae
tinage sarangeul pyohyeon motaedo
neowa hamkke yeonghwareul
bogo babeul meogeumyeon
ni gibuni pullilgeora yeogideon
nae saenggageun tto bitnaga
georireul geonilmyeo neoege
jangnaneul chyeodo
jinbuhan sarang nori
sarangeun hanttae sarangeun
ibyeolgwa hanpae
ibyeoreun sarangeul derigo ganeunde

taeyangeun tteugeounde
ni mameun eoreoinne
nuguui jalmosinji
saranghagin haneunde baby
modeunge geudaeronde
urineun byeonhaeinne
nuguui jalmosinji
saranghagin haneunde baby

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no


sarangeun hanttae
sarangeun ibyeolgwa hanpae
ibyeoreun sarangeun derigo ganne

sarangeun hanttae
sarangeun ibyeolgwa hanpae
ibyeoreun sarangeun derigo ganne

beorimyeon beoryeojineunge
sarangiramyeon eolmana joheulkka
(modu kkuminde ni soneul jabeun geon)
wonhamyeon eodeojineunge
sarangiramyeon eolmana joheulkka
(modu kkuminde naneun beoseonaji motane)

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

heeojiji motaneun yeoja,
tteonagaji motaneun namja
saranghaji annneun uri
geuraeseo no no no no no no

no no no~ no no no~
no no no~ no no no~
oh yeh~

sarange mukkineun
namjaneun yakhae ppajingeolkka
sarangeul gurmgineun
namjaneun muneungnyeokhangeolkka
bimireul sumgineun
namjaneun na ppuningeolkka
sarang daeche wae
byeonhaneungeolkka

yeh ~`,
      },
    ],
  },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
  playerPage.classList.remove("active");
  songDetailPage.classList.remove("active"); // Pastikan detail page disembunyikan
  homePage.classList.add("active");

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.remove("detail-active-bg");
  backgroundVideoContainer.classList.remove("active"); // Sembunyikan video background
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
  pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
  homePage.classList.remove("active");
  playerPage.classList.remove("active");
  songDetailPage.classList.add("active");

  detailAlbumArt.src = song.albumArtUrl;
  detailTrackTitle.textContent = song.title;
  detailTrackArtist.textContent = song.artist;
  detailAlbumName.textContent = song.album || "Unknown Album";

  bodyElement.classList.remove("player-active-bg");
  bodyElement.classList.add("detail-active-bg");
  backgroundVideoContainer.classList.remove("active");
  backgroundVideo.pause(); // Jeda video background
  backgroundVideo.src = ""; // Kosongkan src video
  backgroundVideo.load();
}

function showPlayerPage() {
  homePage.classList.remove("active");
  songDetailPage.classList.remove("active");
  playerPage.classList.add("active");

  bodyElement.classList.remove("detail-active-bg");
  bodyElement.classList.add("player-active-bg");
  backgroundVideoContainer.classList.add("active"); // Tampilkan video background

  const currentSong = songs[currentSongIndex];
  if (currentSong && currentSong.videoBgSrc) {
    backgroundVideo.src = currentSong.videoBgSrc;
    backgroundVideo.load();
    backgroundVideo
      .play()
      .catch((e) => console.error("Error playing video background:", e));
  } else {
    backgroundVideo.src = "";
    backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
  }
}

// --- Home Page Logic ---
function renderSongList() {
  songListElement.innerHTML = "";
  if (songs.length === 0) {
    songListElement.innerHTML =
      '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
    return;
  }
  songs.forEach((song, index) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("data-id", song.id);
    listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
    // --- Perubahan Penting di sini ---
    // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
    listItem.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(songs[currentSongIndex]);
      playTrack();
      showPlayerPage(); // Langsung pindah ke halaman pemutar musik
    });

    // Event listener untuk hover
    listItem.addEventListener("mouseenter", () => {
      // Hanya aktifkan video background jika kita di halaman home
      if (homePage.classList.contains("active") && song.videoBgSrc) {
        backgroundVideo.src = song.videoBgSrc;
        backgroundVideo.load();
        backgroundVideoContainer.classList.add("active");
        backgroundVideo
          .play()
          .catch((e) => console.error("Error playing video on hover:", e));
        bodyElement.classList.add("player-active-bg"); // Tambahkan kelas untuk warna background body
      }
    });
    listItem.addEventListener("mouseleave", () => {
      // Sembunyikan video background hanya jika kita di halaman home
      if (homePage.classList.contains("active")) {
        backgroundVideoContainer.classList.remove("active");
        backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
        backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
        backgroundVideo.load();
        bodyElement.classList.remove("player-active-bg");
      }
    });

    songListElement.appendChild(listItem);
  });
}

// --- Player Logic ---
function loadSong(song) {
  if (!song) {
    console.error("Lagu tidak ditemukan!");
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
    playerTrackTitle.textContent = "Lagu Tidak Tersedia";
    playerTrackArtist.textContent = "-";
    lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>";
    audioPlayer.src = "";
    playerCurrentTime.textContent = "0:00";
    playerTotalDuration.textContent = "0:00";
    playerProgressBar.style.width = "0%";
    return;
  }
  albumArtPlayer.src = song.albumArtUrl;
  playerTrackTitle.textContent = song.title;
  playerTrackArtist.textContent = song.artist;

  renderLyrics(song.lyrics);

  audioPlayer.src = song.audioSrc;

  audioPlayer.onloadedmetadata = () => {
    playerTotalDuration.textContent = formatTime(audioPlayer.duration);
  };
  audioPlayer.load();
  updatePlayPauseIcon();
}
function renderLyrics(lyrics) {
  lyricsContainer.innerHTML = "";
  if (!lyrics || lyrics.length === 0) {
    lyricsContainer.innerHTML =
      "<p>Lyrics are not available for this song.</p>";
    return;
  }

  // Trường hợp lyrics chỉ có text (không có time)
  if (lyrics.length === 1 && !lyrics[0].time) {
    const lines = lyrics[0].text.split("\n"); // tách theo xuống dòng
    lines.forEach((line) => {
      if (line.trim() !== "") {
        // bỏ dòng trống
        const p = document.createElement("p");
        p.textContent = line.trim();
        p.classList.add("lyric-line");
        lyricsContainer.appendChild(p);
      }
    });
  } else {
    // Trường hợp lyrics có time (highlight theo nhạc)
    lyrics.forEach((line) => {
      const span = document.createElement("span");
      span.textContent = line.text;
      span.setAttribute("data-time", line.time);
      span.classList.add("lyric-line");
      lyricsContainer.appendChild(span);
    });
  }
}

function playTrack() {
  if (!audioPlayer.src || audioPlayer.src === window.location.href) {
    if (songs.length > 0) {
      loadSong(songs[currentSongIndex]);
    } else {
      console.log("Tidak ada lagu untuk dimainkan.");
      return;
    }
  }
  isPlaying = true;
  audioPlayer.play().catch((error) => console.error("Error saat play:", error));
  updatePlayPauseIcon();
}

function pauseTrack() {
  isPlaying = false;
  audioPlayer.pause();
  updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
  if (isPlaying) {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
}

function prevTrack() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
}

function nextTrackLogic() {
  if (songs.length === 0) return;
  if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
}

function nextTrack() {
  if (songs.length === 0) return;

  if (repeatMode === 1 && audioPlayer.ended) {
  } else if (isShuffle) {
    playRandomTrack();
  } else {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      if (repeatMode === 2) {
        currentSongIndex = 0;
      } else {
        currentSongIndex = songs.length - 1;
        loadSong(songs[currentSongIndex]);
        pauseTrack();
        audioPlayer.currentTime = audioPlayer.duration;
        return;
      }
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
  }
  showPlayerPage();
}

function playRandomTrack() {
  if (songs.length <= 1) {
    currentSongIndex = 0;
  } else {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex);
    currentSongIndex = randomIndex;
  }
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
}

audioPlayer.addEventListener("timeupdate", () => {
  if (audioPlayer.duration) {
    const progressPercent =
      (audioPlayer.currentTime / audioPlayer.duration) * 100;
    playerProgressBar.style.width = `${progressPercent}%`;
    playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
    const currentTime = audioPlayer.currentTime;
    const lyricLines = lyricsContainer.querySelectorAll(".lyric-line");
    let highlightedLine = null;

    lyricLines.forEach((line, index) => {
      const lineTime = parseFloat(line.getAttribute("data-time"));
      let nextLineTime = Infinity;
      if (index + 1 < lyricLines.length) {
        nextLineTime = parseFloat(
          lyricLines[index + 1].getAttribute("data-time")
        );
      }

      if (currentTime >= lineTime && currentTime < nextLineTime) {
        line.classList.add("highlight");
        highlightedLine = line;
      } else {
        line.classList.remove("highlight");
      }
    });

    if (highlightedLine) {
      const containerRect = lyricsContainer.getBoundingClientRect();
      const lineRect = highlightedLine.getBoundingClientRect();
      const isOutsideTop = lineRect.top < containerRect.top;
      const isOutsideBottom = lineRect.bottom > containerRect.bottom;

      if (isOutsideTop || isOutsideBottom) {
        highlightedLine.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }
    }
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

playerProgressBarContainer.addEventListener("click", (e) => {
  if (!audioPlayer.duration || songs.length === 0) return;
  const width = playerProgressBarContainer.clientWidth;
  const clickX = e.offsetX;
  audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener("input", (e) => {
  audioPlayer.volume = e.target.value;
});

playerSpeedSlider.addEventListener("input", (e) => {
  audioPlayer.playbackRate = parseFloat(e.target.value);
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener("click", () => {
  isShuffle = !isShuffle;
  playerShuffleBtn.classList.toggle("active-feature", isShuffle);
  console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener("click", () => {
  repeatMode = (repeatMode + 1) % 3;
  updateRepeatButtonUI();
  console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
  playerRepeatBtn.classList.remove("active-feature");
  audioPlayer.loop = false;

  if (repeatMode === 0) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
  } else if (repeatMode === 1) {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
    playerRepeatBtn.classList.add("active-feature");
    audioPlayer.loop = true;
  } else {
    playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    playerRepeatBtn.classList.add("active-feature");
  }
}

playerPlayPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});
playerPrevBtn.addEventListener("click", prevTrack);
playerNextBtn.addEventListener("click", nextTrackLogic);

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 1) {
  } else {
    nextTrack();
  }
});

backToHomeFromDetailBtn.addEventListener("click", showHomePage);
backToHomeBtn.addEventListener("click", showHomePage);
playFromDetailBtn.addEventListener("click", () => {
  loadSong(songs[currentSongIndex]);
  playTrack();
  showPlayerPage();
});
function init() {
  console.log("Initializing...");
  console.log("Songs array length:", songs.length);
  console.log("songListElement:", songListElement);

  renderSongList();

  if (songs.length > 0) {
    loadSong(songs[currentSongIndex]);
  } else {
    albumArtPlayer.src =
      "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
    playerTrackTitle.textContent = "Tidak Ada Lagu";
    playerTrackArtist.textContent = "Tambahkan lagu";
    lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
  }
  audioPlayer.volume = playerVolumeSlider.value;
  audioPlayer.playbackRate = playerSpeedSlider.value;
  currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
  updatePlayPauseIcon();
  updateRepeatButtonUI();
  showHomePage();
  console.log("Initialization complete.");
}

init();
