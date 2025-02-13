document.addEventListener("DOMContentLoaded", function() {
    let player = new Player();

    let player1Choice = document.getElementById("player1");
    let player2Choice = document.getElementById("player2");

    player1Choice.addEventListener("click", function() {
        player.choosePlayer();
        play(player);
    });

    player2Choice.addEventListener("click", function() {
        player.choosePlayer();
        play(player);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let output = document.getElementById("output");
    let cleanButton = document.getElementById("clean-button");

    cleanButton.addEventListener("click", function() {
        this.turn = 0;
        this.victory = false;

        const board = document.getElementById("board");

        for (let row = 0; row < board.rows.length; row++) {
            for (let col = 0; col < board.rows[row].cells.length; col++) {
                let cell = board.rows[row].cells[col];
                cell.innerText = null; // al hacer cambio de jugador algo falla
                cell.style.color = "black";
            };
        };
        output.textContent = "Fin del juego";
    });
});

function play(player) {
    let [player1, player2] = player.choosePlayer();
    let game = new Game(player1, player2);

    game.firstTurn();
    game.placeToken();
};
