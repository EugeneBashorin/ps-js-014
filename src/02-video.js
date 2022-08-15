import throttle from 'lodash.throttle';
import Player from "@vimeo/player"

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//создаем переменную ключ с текущим временем воспроизведения
 const key = "videoplayer-current-time";
 
//метод достает из хранилища время воспроизведения
 const currentTime = localStorage.getItem(key);

//cохраняет текущее время в хранилище во время воспроизведения
 const onPlay = function(data){
	localStorage.setItem(key, data.seconds);
 }
//проверка на наличие записи в локальном хранилище, и передачи данного времени.
 if(currentTime){
	 player.setCurrentTime(currentTime);
 }
 //обновление сохранения времени при воспроизведении
 //throttle обновляет запись в хранилище каждую секунду
 player.on('timeupdate', throttle(onPlay, 1000));