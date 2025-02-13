class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.currentPlayer = null;
        this.turn = 0;
        this.victory = false;
    };

    readBoard() {
        var board = document.getElementById("board");

        for (let row = 0; row < board.rows.length; row++) {
            for (let col = 0; col < board.rows[row].cells.length; col++) {
                board.rows[row].cells[col];
            };
        };
    };

    firstTurn() {
        let output = document.getElementById("output");
        let randomNumber = Math.floor(Math.random() * 10); // de 0 a 9
    
        if (randomNumber % 2 == 0) {
            this.currentPlayer = this.players[0]; // X
            output.textContent = `El jugador ${this.players[0]} tiene el primer turno.`;
        } else {
            this.currentPlayer = this.players[1]; // 0
            output.textContent = `El jugador ${this.players[1]} tiene el primer turno.`;
        };
    };

    illegalMovements(row, col) {
        const board = document.getElementById("board");
        let output = document.getElementById("output");
        let cell = board.rows[row].cells[col];

        if (["X", "O"].includes(cell.innerText)) {
            output.textContent = "Movimiento no permitido: celda ocupada.";
            return false;
        };
        return true;
    };

    placeToken() {
        const cells = document.querySelectorAll("[data-cells]");
        let output = document.getElementById("output");

        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                if (this.victory) return;

                const datarow = parseInt(cell.getAttribute("data-row"));
                const datacol = parseInt(cell.getAttribute("data-col"));

                if (this.illegalMovements(datarow, datacol)) {

                    if (this.currentPlayer === this.players[0]) { // X
                        cell.innerText = this.currentPlayer;
                        cell.style.color = "red";
                    } else {
                        cell.innerText = this.currentPlayer;
                        cell.style.color = "blue";
                    };

                    if (this.checkVictory()) {
                        output.textContent = `🎉 Victoria de ${this.currentPlayer} 🎉`;
                        this.readBoard();
                        this.victory = true;
                        return;
                    };
                    this.switchTurn();
                };
            });
        });
    };

    checkVictory() {
        const board = document.getElementById("board");

        for (let row = 0; row < 3; row++) {
            if (board.rows[row].cells[0].innerText == this.currentPlayer && 
                board.rows[row].cells[1].innerText == this.currentPlayer && 
                board.rows[row].cells[2].innerText == this.currentPlayer) {
                return true;
            };
        };

        for (let col = 0; col < 3; col++) {
            if (board.rows[0].cells[col].innerText == this.currentPlayer && 
                board.rows[1].cells[col].innerText == this.currentPlayer && 
                board.rows[2].cells[col].innerText == this.currentPlayer) {
                return true;
            };
        };

        if (board.rows[0].cells[0].innerText == this.currentPlayer && 
            board.rows[1].cells[1].innerText == this.currentPlayer && 
            board.rows[2].cells[2].innerText == this.currentPlayer) {
            return true;
        } else if (board.rows[0].cells[2].innerText == this.currentPlayer && 
            board.rows[1].cells[1].innerText == this.currentPlayer && 
            board.rows[2].cells[0].innerText == this.currentPlayer) {
            return true;
        };
        return false;
    };

    switchTurn() {
        let output = document.getElementById("output");

        if (this.currentPlayer == this.players[0]) {
            this.currentPlayer = this.players[1]; // O
        } else {
            this.currentPlayer = this.players[0]; // X
        };

        output.textContent = `Es el turno de ${this.currentPlayer}.`;

        if (++this.turn >= 9) {
            output.textContent = "Tablero lleno. Empate.";
        };
    }; 
};
