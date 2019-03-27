export default class {
    convertTime(format, timeStamp) {
        const time = timeStamp ? new Date(timeStamp) : new Date();
        const parse = /YY(?:YY)|d{2}|MM|hh|[aA]|[YMDhmsaoic]+|"[^"]*"|'[^']*'/g;
        const masks = {
            default: 'YYYY/MM/DD hh:mm:ss',
        };
        const formatN = format || masks.default;
        const f = {
            YYYY: time.getFullYear(),
            M: time.getMonth() + 1,
            MM: this.pad((time.getMonth() + 1)),
            D: time.getDate(),
            DD: this.pad(time.getDate()),
            h: time.getHours(),
            hh: this.pad(time.getHours()),
            m: time.getMinutes(),
            mm: this.pad(time.getMinutes()),
            s: time.getSeconds(),
            ss: this.pad(time.getSeconds()),

            a: this.pad(parseInt((timeStamp / 1000 / 60 / 60 / 24), 10)),
            o: this.pad(parseInt((timeStamp / 1000 / 60 / 60) % 24, 10)),
            i: this.pad(parseInt((timeStamp / 1000 / 60) % 60, 10)),
            c: this.pad(parseInt((timeStamp / 1000) % 60, 10)),

        };
        return formatN.replace(parse, ($0) => f[$0]);
    }
    pad(n) {
        return (Array(2).join('0') + n).slice(-2);
    }
}
