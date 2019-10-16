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
        const icon = e.currentTarget.paused ? '►' : '❚❚';
        toggle.textContent = icon;
    };

    const skip = (e) => {
        video.currentTime += parseFloat(e.currentTarget.dataset.skip);
    };

    const handleSliders = (e) => {
        video[e.currentTarget.name] = e.currentTarget.value;
    };

    const handleProgress = () => {
        const percent = (video.currentTime / video.duration) * 100;
        progressBar.style.flexBasis = `${percent}%`;
    };

    // Event listeners
    video.addEventListener('click', togglePlay);
    video.addEventListener('play', updateButton);
    video.addEventListener('pause', updateButton);
    video.addEventListener('timeupdate', handleProgress);

    toggle.addEventListener('click', togglePlay);
    skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip));
    ranges.forEach(range => range.addEventListener('change', handleSliders));
    ranges.forEach(range => range.addEventListener('mousemove', handleSliders));
}());