document.addEventListener("DOMContentLoaded", function() {
    let player = new Player();

    let player1_choice = document.getElementById("player1");
    let player2_choice = document.getElementById("player2");

    player1_choice.addEventListener("click", function() {
        player.choose_player();
        play(player);
    });

    player2_choice.addEventListener("click", function() {
        player.choose_player();
        play(player);
    });
});

function play(player) {
    let [player1, player2] = player.choose_player();
    let game = new Game(player1, player2);

    game.first_turn();

    console.log(`Es el turno: ${game.turn}`);

    game.place_token();
};
