import './css/styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;
  }
    
    // метод для ссылок на контайнер, секунды, минуты, часы, дни
  getRefs() {
    const timerContainer = document.querySelector(this.selector);
    const days = timerContainer.querySelector('[data-value="days"]');
    const hours = timerContainer.querySelector('[data-value="hours"]');
    const mins = timerContainer.querySelector('[data-value="mins"]');
    const secs = timerContainer.querySelector('[data-value="secs"]');

    return { days, hours, mins, secs };
  }
    
    updateTimer({ days, hours, mins, secs }) {
      
    //переменная для определения текущего времени
        const currentDate = Date.now();
        
    //переменная для определения разницы между текущим временем и заданным временем 
    const time = this.targetDate - currentDate;
        
    //переменные для определения и округления секунд, минут, часов, дней
    const dayRounding = Math.floor(time / (1000 * 60 * 60 * 24));
    // console.log(time);
    const hoursRounding = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minsRounding = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secsRounding = Math.floor((time % (1000 * 60)) / 1000);

    //1-вариант как добавить 0 если цифра меньше 10
    days.textContent = dayRounding < 10 ? `0${dayRounding}` : dayRounding;
    hours.textContent = hoursRounding < 10 ? `0${hoursRounding}` : hoursRounding;
    mins.textContent = minsRounding < 10 ? `0${minsRounding}` : minsRounding;
    secs.textContent = secsRounding < 10 ? `0${secsRounding}` : secsRounding; 
      
    //2-вариант как добавить 0 если цифра меньше 10 
    // days.textContent = dayRounding.toString().padStart(2, "0");
    // hours.textContent = hoursRounding.toString().padStart(2, "0");
    // mins.textContent = minsRounding.toString().padStart(2, "0");
    // secs.textContent = secsRounding.toString().padStart(2, "0");

      
    // если отчет времени меньше чем 1000 милисекунд очищаем интервал
    if (time < 1000) {
      this.clearTimer();
    }
  }

  //функция для начала отсчета таймера
  startTimer() {
    this.timerId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }
  clearTimer() {
    clearInterval(this.timerId);
  }
}

// экземпляр класса для заданного времени в будущем
const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sep 26, 2021"),
});

// экземпляр класса для заданного текущего времени
const timer2 = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date("Aug 7, 2021 23:09"),
});

// вызов начала таймеров
timer.startTimer();
timer2.startTimer();
// console.log(timer);