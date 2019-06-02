var app = new Vue({
    el: '#timer',
    beforeMount: componentDidMount,
    beforeDestroy: componentWillUnmount,
    data: {
        months: undefined,
        days: undefined,
        hours: undefined,
        minutes: undefined,
        seconds: undefined,

        monthsRadius: 0,
        daysRadius: 0,
        hoursRadius: 0,
        minutesRadius: 0,
        secondsRadius: 0
    }
});

const timeTillDate = "2019-10-06 09:00:00";

function componentDidMount() {
    this.interval = setInterval(() => {

        const then = moment(timeTillDate);
        const now = moment();
        const countdown = moment.duration(then.diff(now));

        app.months = countdown.months();
        app.days = countdown.days();
        app.hours = countdown.hours();
        app.minutes = countdown.minutes();
        app.seconds = countdown.seconds();

        app.monthsRadius = mapNumber(app.months, 12, 0, 0, 360);
        app.daysRadius = mapNumber(app.days, 30, 0, 0, 360);
        app.hoursRadius = mapNumber(app.hours, 24, 0, 0, 360);
        app.minutesRadius = mapNumber(app.minutes, 60, 0, 0, 360);
        app.secondsRadius = mapNumber(app.seconds, 60, 0, 0, 360);
    }, 1000);
}

function componentWillUnmount() {
    if (this.interval) {
        clearInterval(this.interval);
    }
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}
