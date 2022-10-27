import Player from '@vimeo/player'
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localStorageKey = localStorage.getItem("videoplayer-current-time");
console.log(localStorageKey);


player.setCurrentTime(localStorageKey).then(function () {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

player.on('timeupdate', throttle(function (time) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(time.seconds));
 
}, 1000));
