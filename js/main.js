(function(){
    const player = document.querySelector('.player');
    const video = player.querySelector('.viewer');
    const progress = player.querySelector('.progress');
    const progressBar = player.querySelector('.progress-filled');
    const toggle = player.querySelector('.toggle');
    const ranges = player.querySelectorAll('.player-slider');
    const skipButton = player.querySelectorAll('[data-skip]');

    const togglePlay = () => {
        video.paused ? video.play() : video.pause();
    }

    video.addEventListener('click', togglePlay);
    toggle.addEventListener('click', togglePlay);
}());