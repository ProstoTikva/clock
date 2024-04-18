const day = document.getElementById("day");
const time = document.getElementById("time");

let clock = setInterval(
    function calctime() {
        let date_now = new Date();
        let hr = date_now.getHours();
        let min = date_now.getMinutes();
        let sec = date_now.getSeconds();
     
        let days = [
            "Воскресенье",
            "Понедельник",
            "Вторник",
            "Среда",
            "Четверг",
            "Суббота"
        ];

        day.textContent = days[date_now.getDay()];

        hr = hr < 10 ? "0" + hr : hr;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        time.textContent = hr + ":" + min + ":" + sec;
    },

    1000
);