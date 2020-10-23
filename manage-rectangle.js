function drawRect(rect) {
    let canvas = document.getElementById("rect-canvas");
    let pen = canvas.getContext("2d");
    pen.beginPath();
    pen.rect(20, 20, rect.width, rect.height);
    pen.lineWidth = 1;
    pen.strokeStyle = 'brown';
    pen.fillStyle = "white";
    // pen.font = "30px Arial";
    pen.fillText(area(rect), 0, 10);
    pen.fillText(circuit(rect), 70, 10);
    pen.fill();
    pen.stroke();
}

function createRect(width, height) {
    let rect = new RectangleFake(width, height);

    drawRect(rect);
}

function area(rect) {
    return `Area: ${rect.height * rect.width}`;
}

function circuit(rect) {
    return `Circuit: ${(rect.width + rect.height) * 2}`;
}

createRect(100, 50);