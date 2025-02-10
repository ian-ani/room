class Player {
    constructor() {
        this.player1 = null;
        this.player2 = null;
    };

    choose_player() {
        let player1 = document.getElementById("player1");
        let player2 = document.getElementById("player2");

        if (player1.checked == true) {
            this.player1 = player1.value; // X
            this.player2 = player2.value; // O
        } else if (player2.checked == true) {
            this.player1 = player1.value; // X
            this.player2 = player2.value; // O
        };
        return [this.player1, this.player2];
    };
};
