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
    // let currentBlock = allTetrisBlocks[0][0];
    // let currentBlock = allTetrisBlocks[0][0];
    // let currentBlock = allTetrisBlocks[0][0];
    // let currentBlock = allTetrisBlocks[1][0];

    // random tetris block
    let randomBlock = Math.floor(Math.random() * allTetrisBlocks.length);
    let currentBlock = allTetrisBlocks[randomBlock][0];

    function draw() {
        currentBlock.forEach(index => {
            squares[currentPosition + index].classList.add("tetris-block");
        })
    }

    draw();
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

