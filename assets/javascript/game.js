const gemGuess = {

  score: 0,
  total: 0,
  wins: 0,
  losses: 0,
  gem01: 0,
  gem02: 0,
  gem03: 0,
  gem04: 0,

  startGame: function() {

    this.total = Math.floor((Math.random() * 100) + 20);
    this.score = 0;
    this.gem01 = Math.floor((Math.random() * 12) + 1);
    this.gem02 = Math.floor((Math.random() * 12) + 1);
    this.gem03 = Math.floor((Math.random() * 12) + 1);
    this.gem04 = Math.floor((Math.random() * 12) + 1);
    $("#score").text(this.score);
    $("#total").text(this.total);
  },

  checkWin: function() {

    if (this.total === this.score) {
      alert("You WIN!~");
      this.wins++;
      $("#wins").text(this.wins);
      this.startGame();
    } else if (this.score > this.total) {
      alert("You LOSE!~");
      this.losses++;
      $("#losses").text(this.losses);
      this.startGame();
    }
  }
}

$(document).ready(function() {

  gemGuess.startGame();

  $("#total").text(gemGuess.total);
  $("#score").text(gemGuess.score);
  $("#wins").text(gemGuess.wins);
  $("#losses").text(gemGuess.losses);

  $("#one").on("click", function() {
    gemGuess.score += gemGuess.gem01;
    $("#score").text(gemGuess.score);
    gemGuess.checkWin();
  });

  $("#two").on("click", function() {
    gemGuess.score += gemGuess.gem02;
    $("#score").text(gemGuess.score);
    gemGuess.checkWin();
  });

  $("#three").on("click", function() {
    gemGuess.score += gemGuess.gem03;
    $("#score").text(gemGuess.score);
    gemGuess.checkWin();
  });

  $("#four").on("click", function() {
    gemGuess.score += gemGuess.gem04;
    $("#score").text(gemGuess.score);
    gemGuess.checkWin();
  });
});
