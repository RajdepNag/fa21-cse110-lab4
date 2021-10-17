var intervalID = setInterval(curr_time, 1000);

function curr_time() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}