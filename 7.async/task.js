class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;

    }

    addClock(time, callback){

        if ( !time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        if ( this.alarmCollection.some( a => a.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }

        this.alarmCollection.push({callback, time, canCall: true});

    }

    removeClock(time) {

        this.alarmCollection = this.alarmCollection.filter( (a) => a.time !== time)

    }

    getCurrentFormattedTime() {
        let Data = new Date();
        let Hour = Data.getHours();
        let Minutes = Data.getMinutes();


        let hourMinut = `0${Hour}:0${Minutes}`

        return hourMinut
    }

    start() {
        if (this.intervalId) {
            return
        }

        this.intervalId = setInterval(() => 
        {this.alarmCollection.forEach((elem) => {if (elem.time === this.getCurrentFormattedTime() && elem.canCall === true) {
            elem.canCall = false;
            elem.callback();
           }
          }
         );
        }, 1000)


    }

    stop() {
        clearInterval(this.intervalId)
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((elem) => elem.canCall = true)

    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }


}