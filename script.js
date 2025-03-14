document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('resume-icon').addEventListener('click', () => {
    document.getElementById('resume-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('resume-modal').style.display = 'none';
});
