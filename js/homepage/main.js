var init = function() {
    initPage();
};

var initPage = function() {
    window.onload = function() {
        rain();
    };
};

var rain = function() {
    var canvas = document.getElementById('canvas_rain'),
        W = canvas.clientWidth,
        H = canvas.clientHeight,
        ctx = canvas.getContext('2d'),
        len = 20,
        count = 250;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    var run = setInterval(drawRain, 200);
    // xiayus(Math.random() * W, Math.random() * H);

    function drawRain() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 1; i <= count; i++) {
            drawLine(Math.random() * W, Math.random() * H, Math.random() * len);
        }
    }

    function drawLine(x, y, length) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + length);
        ctx.lineWidth = 0.5;
        ctx.stroke();
    }

    function xiayus() {

    }
};

init();