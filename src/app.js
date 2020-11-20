document.addEventListener("DOMContentLoaded", () => {
    // querySelectors
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const score = document.querySelector("#score");
    const startButton = document.querySelector("#start-button");

    // store array values
    let timerID;

    // set initial width
    const width = 10;

    // colors
    const colors = ["#FB6542", "#FFBB00", "#3F681C", "#375E97"]

    // tetrisBlocks
    const LBlock = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2 + 1, width * 2],
        [width, width * 2, width * 2 + 1, width * 2 + 2]
    ];

    const ZBlock = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1]
    ];

    const TBlock = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ];

    const OBlock = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1]
    ];

    const IBlock = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3]
    ];

    const allTetrisBlocks = [LBlock, ZBlock, TBlock, OBlock, IBlock];

    console.log(OBlock);

    let currentPosition = 4;
    let currentRotation = 0;

    // // random tetris block
    // let randomBlock = Math.floor(Math.random() * allTetrisBlocks.length);
    // let currentBlock = allTetrisBlocks[randomBlock][currentRotation];

    // // draw block
    // function draw() {
    //     currentBlock.forEach(index => {
    //         squares[currentPosition + index].classList.add("tetris-block");
    //         squares[currentPosition + index].style.backgroundColor = colors[randomBlock];
    //     })
    // }

    // // undraw block
    // function undraw() {
    //     currentBlock.forEach(index => {
    //         squares[currentPosition + index].classList.remove("tetris-block");
    //         squares[currentPosition + index].style.backgroundColor = "";
    //     })
    // }

    // // timer to move block down every .5 second
    // timerID = setInterval(moveDown, 500);

    // // move block down
    // function moveDown() {
    //     undraw();
    //     currentPosition += width;
    //     draw();
    //     freeze();
    // }

    // function freeze() {
    //     if (currentBlock.some(index => squares[currentPosition + index + width].classList.contains("filled"))) {
    //         currentBlock.forEach(index => squares[currentPosition + index ].classList.add("filled"));
    //         let randomBlock = Math.floor(Math.random() * allTetrisBlocks.length);
    //         let currentBlock = allTetrisBlocks[randomBlock][currentRotation];
    //         let currentPosition = 4;
    //         draw();
    //     }
    // }

})