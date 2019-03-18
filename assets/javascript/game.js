const gemGuess = {
  score: 0,
  total: 0,
  wins: 0,
  losses: 0,
  gem01: 0,
  gem02: 0,
  gem03: 0,
  gem04: 0,

  playGame: function() {

    this.total = Math.floor((Math.random() * 100) + 21);
    this.score = 0;
    this.gem01 = Math.floor((Math.random() * 10) + 1);
    this.gem02 = Math.floor((Math.random() * 10) + 1);
    this.gem03 = Math.floor((Math.random() * 10) + 1);
    this.gem04 = Math.floor((Math.random() * 10) + 1);

    const round = () => {

      var gemPicked = '';

      // $("#one").on("click", function() {
      //   gemPicked = '1';
      // });
      //
      // $("#two").on("click", function() {
      //   gemPicked = '2';
      // });
      //
      // $("#three").on("click", function() {
      //   gemPicked = '3';
      // });
      //
      // $("#four").on("click", function() {
      //   gemPicked = '4';
      // });

      switch (gemPicked) {
        case '1':
          this.score += this.gem01;
          break;
        case '2':
          this.score += this.gem01;
          break;
        case '3':
          this.score += this.gem01;
          break;
        case '4':
          this.score += this.gem01;
          break;
        default:
          alert('ERROR')
          break;
      }
      if (this.total === this.score) {
        alert("You WIN!~");
        this.wins++;
      } else if (this.score > this.total) {
        alert("You LOST!~");
        this.losses++;
      }
    }

    do {
      round();
    } while (this.score < this.total);
  }
}

gemGuess.playGame();

// console.log(gemGuess.total);
// console.log(gemGuess.score);
// console.log(gemGuess.gem01);
// console.log(gemGuess.gem02);
// console.log(gemGuess.gem03);
// console.log(gemGuess.gem04);
// console.log(gemGuess.wins);
// console.log(gemGuess.losses);
