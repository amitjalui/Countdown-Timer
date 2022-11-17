(function () {
    // input field
    let hour = document.querySelector('.hours');
    let min = document.querySelector('.minutes');
    let sec = document.querySelector('.seconds');

    // buttons
    let startBtn = document.querySelector('.start');
    let stopBtn = document.querySelector('.stop');
    let resetBtn = document.querySelector('.reset');

    let countdownTimer = null;

    startBtn.addEventListener('click', () => {
        if (hour.value == 0 && min.value == 0 && sec.value == 0) return;

        const timerBtn = () => {
            startBtn.style.display = "none";
            stopBtn.style.display = "initial";

            countdownTimer = setInterval(() => {
                timer();
            }, 1000);
        }

        timerBtn();
    });

    const stopTimer = (state) => {
        startBtn.innerHTML = state === 'pause' ? 'Continue' : 'Start';

        startBtn.style = 'initial';
        stopBtn.style = 'none';

        // setInterval Function will be stopped.
        clearInterval(countdownTimer);
    };

    const timer = () => {
        if (sec.value > 60) {
            min.value++;
            sec.value = parseInt(sec.value) - 59;
        }

        if (min.value > 60) {
            hour.value++;
            min.value = parseInt(min.value) - 60;
        }
        
        if (hour.value == 0 && min.value == 0 && sec.value == 0) {
            hour.value = '';
            min.value = '';
            sec.value = '';
            stopTimer();
        } else if (sec.value != 0) {
            sec.value = `${sec.value <= 10 ? "0" : ""}${sec.value - 1}`;
        } else if (min.value != 0 && sec.value == 0) {
            sec.value = 59;
            min.value = `${min.value <= 10 ? "0" : ""}${min.value - 1}`;
        } else if (hour.value != 0 && min.value == 0) {
            min.value = 60;
            hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
        }
    };

    stopBtn.addEventListener('click', () => {
        stopTimer('pause');
    });

    resetBtn.addEventListener('click', () => {
        hour.value = '';
        min.value = '';
        sec.value = '';

        stopTimer();
    });
    
})();























