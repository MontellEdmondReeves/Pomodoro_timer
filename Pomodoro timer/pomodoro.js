const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const startbtn = document.querySelector('.start-btn');
const stopbtn = document.querySelector('.stop-btn');
const resetbtn = document.querySelector('.reset-btn');
let min = 25;
let sec = 0;
let timer;
let flag=0;
function countDown(){
    if(min === -1 && sec === 59){
        alert("Time's up!");
        flag = 0;
        resetCountDown();
    }else{
    minutes.textContent = min.toString().padStart(2,'0');
    seconds.textContent = sec.toString().padStart(2,'0');
    if(sec === 0){
        min--;
        sec = 60;
    }
    sec--;}
}
function startCountDown(){
     timer = setInterval(() => {
        countDown();
    }, 1000);
}
function stopCountDown(){
    clearInterval(timer);
}
function resetCountDown(){
    clearInterval(timer);
    min = 25;
    sec = 0;
    minutes.textContent = min.toString().padStart(2,'0');
    seconds.textContent = sec.toString().padStart(2,'0');
}
startbtn.addEventListener('click', function(){
    flag++;
    if(flag === 1){
    startCountDown();}
});
stopbtn.addEventListener('click', function(){
    flag = 0;
    stopCountDown();
});
resetbtn.addEventListener('click', function(){
    flag = 0;
    resetCountDown();
});