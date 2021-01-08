class Game {
	totalTurns = 10;
	turnLeft = 10;
	playersList = [];
	playersTurns = [];
	currentPlayerIndex = 0;

	startGame = () => {
		this.startTurn();
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}

	startTurn = () => {
		console.log(`----`);
		const turnNumber = this.totalTurns - this.turnLeft + 1;
        if (turnNumber === 1) {
            console.log("Bienvenue !");
            console.log(
                "Joueurs participants :",
                this.playersList.map(({ name }) => name).join(', ')
            );
        }

        console.log(`Tour de jeu ${turnNumber} / ${this.totalTurns}`);

		this.playersList.forEach((player) => {
			player.initNewTurn();
		});

		this.playersTurns = this.playersList.filter((player) => (
			player.isAlive()
		));

		this.pickPlayerInTurn();
	}

	pickPlayerInTurn = () => {
		this.currentPlayerIndex = getRandomNumber(0, this.playersTurns.length - 1);
		const currentPlayerName = this.playersTurns[this.currentPlayerIndex].name;
		console.log(`- -`);
		console.log(`⏰ C'est au tour de ${currentPlayerName} de jouer.`);
	}

	nextPlayer = () => {
		this.playersTurns.splice(this.currentPlayerIndex, 1);

		if (this.playersTurns.length === 0) {
			this.nextTurn();
			return;
		}

		this.pickPlayerInTurn();
	}

	nextTurn = () => {
		this.turnLeft -= 1;
		if (this.turnLeft <= 0) {
			console.log("🍺 Game over !");
			this.playersList.forEach((player) => {
				if (player.isAlive()) {
					player.status = "winner";
				}
			});
		}

		console.log("🧮 Statistiques actuelles :");
		this.watchStats();
		if (this.turnLeft > 0) {
			this.startTurn();
		}
	}

	watchStats = () => {
		this.playersList.forEach((player) => {
            if (!player.isAlive()) {
                console.log(`${player.name} est mort 💀. RIP !`);
			} else {
                console.log(
                    `${player.name} est toujours en vie :`,
                    `${player.hp} PV, ${player.dmg} pt. d'attaque, ${player.mana} mana.`
                );
			}
		});
	}

	currentPlayerAttacks = (victim, isSpecialAttack = false) => {
		const player = this.playersTurns[this.currentPlayerIndex];
		if (player.name === victim.name) {
			console.log("🤯 Je ne vais pas m'attaquer moi-même !");
			return;
		}

		if (isSpecialAttack) {
			player.specialAttacks(victim);
		} else {
			player.attacks(victim);
		}

		this.nextPlayer();
	}
}
