document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let squares = Array.from(document.querySelectorAll(".grid div"));
    const score = document.querySelector("#score");
    const startBtn = document.querySelector("#start-btn");
    const width = 10;

    // Tetris Blocks
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
    ]

    const TBlock = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1]
    ]

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

    let currentPosition = 4;
    let currentRotation = 0;

    // random tetris block
    let randomBlock = Math.floor(Math.random() * allTetrisBlocks.length);
    let currentBlock = allTetrisBlocks[randomBlock][currentRotation];


    function draw() {
        currentBlock.forEach(index => {
            squares[currentPosition + index].classList.add("tetris-block");
        })
    }

    function undraw() {
        currentBlock.forEach(index => {
            squares[currentPosition + index].classList.remove("tetris-block");
        })
    }

    // move the block down every 1 second
    timerID = setInterval(moveDown,500);

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
    }

    // function freeze() {
    //     if (currentBlock.some(index => squares[].classList.contains("taken"));
    // }


})










// // Tetris Blocks
// const LBlock = [
//     ["one"],
//     ["two"],
//     ["three"],
//     ["four"]
// ]


// // Array.prototype.forEach()
// LBlock.forEach(x=>console.log(x));

