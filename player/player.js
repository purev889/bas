const video = document.getElementById('video');
const playpause = document.getElementById('playpause');
const rewind = document.getElementById('rewind');
const forward = document.getElementById('forward');
const volume = document.getElementById('volume');
const timebar = document.getElementById('timebar');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

// Set default volume to half
video.volume = 0.5;
volume.value = 0.5;

// Format time as mm:ss
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Update timebar and time display
function updateTimebar() {
    if (!isNaN(video.duration)) {
        timebar.max = video.duration;
        durationEl.textContent = formatTime(video.duration);
    }
    if (!isNaN(video.currentTime)) {
        timebar.value = video.currentTime;
        currentTimeEl.textContent = formatTime(video.currentTime);
    }
}

// Update timebar as video plays
video.addEventListener('timeupdate', updateTimebar);

// Set duration when metadata is loaded
video.addEventListener('loadedmetadata', updateTimebar);

// Seek video when timebar is changed
timebar.addEventListener('input', () => {
    video.currentTime = timebar.value;
    currentTimeEl.textContent = formatTime(video.currentTime);
});

// Play/pause logic
playpause.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

video.addEventListener('play', () => {
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';
});
video.addEventListener('pause', () => {
    playpause.innerHTML = '<i class="fa-solid fa-play"></i>';
});

// Rewind/forward logic
rewind.addEventListener('click', () => {
    video.currentTime = Math.max(0, video.currentTime - 10);
});
forward.addEventListener('click', () => {
    video.currentTime = Math.min(video.duration, video.currentTime + 10);
});

// Volume control
volume.addEventListener('input', () => {
    video.volume = volume.value;
});

// Menu button toggle
const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');
menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuDropdown.classList.toggle('show');
});
menuDropdown.addEventListener('click', (e) => {
    e.stopPropagation();
});
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
        menuDropdown.classList.remove('show');
    }
});