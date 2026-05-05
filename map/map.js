const btnSchool = document.getElementById('btn-school');
const btnCity = document.getElementById('btn-city');
const btnMain = document.getElementById('btn-main');
const iframeSchool = document.getElementById('iframe-school');
const iframeCity = document.getElementById('iframe-city');

btnSchool.addEventListener('click', () => {
    btnSchool.classList.add('active');
    btnCity.classList.remove('active');
    iframeSchool.classList.add('active');
    iframeCity.classList.remove('active');
});

btnCity.addEventListener('click', () => {
    btnCity.classList.add('active');
    btnSchool.classList.remove('active');
    iframeCity.classList.add('active');
    iframeSchool.classList.remove('active');
});

btnMain.addEventListener('click', () => {
    window.location.href = "../main/index.html";
});

const menuBtn = document.getElementById('menuBtn');
const menuDropdown = document.getElementById('menuDropdown');

menuBtn.addEventListener('click', () => {
    menuDropdown.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuDropdown.contains(e.target)) {
        menuDropdown.classList.remove('show');
    }
});