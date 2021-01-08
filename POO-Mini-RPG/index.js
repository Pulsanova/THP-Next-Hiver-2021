const Ulder = new Paladin('Ulder');
const Grace = new Fighter('Grace');
const Draven = new Berserker('Draven');
const Moana = new Monk('Moana');
const Carl = new Assassin('Carl');

const game = new Game();
game.addPlayer(Ulder);
game.addPlayer(Grace);
game.addPlayer(Draven);
game.addPlayer(Moana);
game.addPlayer(Carl);

game.startGame();
