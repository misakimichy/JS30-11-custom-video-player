(function(){
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress-filled');
    const toggle = player.querySelector('.toggle');
    const ranges = player.querySelectorAll('.player-slider');
    const skipButtons = player.querySelectorAll('[data-skip]');

    const togglePlay = () => {
        video.paused ? video.play() : video.pause();
    };

    const updateButton = (e) => {
        const icon = e.currentTarget.paused ? 'Play' : 'Pause';
        toggle.textContent = icon;
    };

    const skip = (e) => {
        video.currentTime += parseFloat(e.currentTarget.dataset.skip);
    };

    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);

    toggle.addEventListener('click', togglePlay);
    skipButtons.forEach(skipButton =>
        skipButton.addEventListener('click', skip)
    );
}());