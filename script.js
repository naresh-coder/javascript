
/*

console.log(a);


let date = new Date();

console.log(date.getFullYear())
console.log(date.getMilliseconds())


let sum = (a ,b )=> {
    return a+b;
}



console.log(sum(10,20));
console.log(sum(32,20));
console.log(sum(23,20));
console.log(sum(2323,20));
console.log(sum(23,230));
console.log(sum(322,20));
*/
let clockFunc = ()=> {
    let date = new Date();

    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let seconds = date.getSeconds();
    const days = ['Sunday', 'Monday', 'Tuesday', 'WednesDay', 'Thurday', 'Friday', 'Saturday'];


    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    if (min < 10) {
        min = '0' + min;
    }
    if (hour < 10) {
        hour = '0' + hour;
    }

    let time = days[day] + " " + hour + " :" + min + " : " + seconds;

    document.getElementById("clk").innerHTML = time ;
   // console.log(clock);

    //return clock;
}


setInterval(clockFunc,1000)










































