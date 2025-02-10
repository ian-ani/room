class Game {
    constructor(player1, player2) {
        this.players = [player1, player2];
        this.current_player = null;
        this.turn = 0;
    };

    read_board() {
        var board = document.getElementById("board");

        for (let row = 0; row < board.rows.length; row++) {
            for (let col = 0; col < board.rows[row].cells.length; col++) {
                let cell = board.rows[row].cells[col];
                console.log(`Txt: ${cell.innerText} \tFila: ${row} \t Celda: ${col}`);
            };
        };
    };

    first_turn() {
        let random_number = Math.floor(Math.random() * 10); // de 0 a 9
    
        if (random_number % 2 == 0) {
            this.current_player = this.players[0]; // X
            console.log(`El jugador ${this.players[0]} tiene el primer turno.`);
        } else {
            this.current_player = this.players[1]; // 0
            console.log(`El jugador ${this.players[1]} tiene el primer turno.`);
        };
    };

    illegal_movements(row, col) {
        const board = document.getElementById("board");
        let cell = board.rows[row].cells[col];

        if (["X", "O"].includes(cell.innerText)) {
            console.log("Movimiento no permitido: celda ocupada.");
            return false;
        };
        return true;
    };

    place_token() {
        const cells = document.querySelectorAll("[data-cells]");

        cells.forEach(cell => {
            cell.addEventListener("click", () => {
                const datarow = parseInt(cell.getAttribute("data-row"));
                const datacol = parseInt(cell.getAttribute("data-col"));

                if (this.illegal_movements(datarow, datacol)) {
                    cell.innerText = this.current_player;
                    if (this.check_victory()) {
                        console.log(`Victoria de ${this.current_player}`);
                        this.read_board();
                        return;
                    };
                    this.switch_turn();
                };
            });
        });
    };

    check_victory() {
        const board = document.getElementById("board");

        for (let row = 0; row < 3; row++) {
            if (board.rows[row].cells[0].innerText == this.current_player && 
                board.rows[row].cells[1].innerText == this.current_player && 
                board.rows[row].cells[2].innerText == this.current_player) {
                return true;
            };
        };

        for (let col = 0; col < 3; col++) {
            if (board.rows[0].cells[col].innerText == this.current_player && 
                board.rows[1].cells[col].innerText == this.current_player && 
                board.rows[2].cells[col].innerText == this.current_player) {
                return true;
            };
        };

        if (board.rows[0].cells[0].innerText == this.current_player && 
            board.rows[1].cells[1].innerText == this.current_player && 
            board.rows[2].cells[2].innerText == this.current_player) {
            return true;
        } else if (board.rows[0].cells[2].innerText == this.current_player && 
            board.rows[1].cells[1].innerText == this.current_player && 
            board.rows[2].cells[0].innerText == this.current_player) {
            return true;
        };
        return false;
    };

    switch_turn() {
        if (this.current_player == this.players[0]) {
            this.current_player = this.players[1]; // O
        } else {
            this.current_player = this.players[0]; // X
        };

        console.log(`Es el turno de ${this.current_player}.`);

        if (this.turn >= 9) {
            console.log("Tablero lleno. Empate.");
        };
    }; 
};
