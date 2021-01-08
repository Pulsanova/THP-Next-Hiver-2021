class Fighter extends Character {
	name = 'Grace';
	hp = 12;
	dmg = 4;
	mana = 40;

	initNewTurn = () => {
		this.shield = 0;
	}

	specialAttacks = (victim) => {
		this.darkVision(victim);
	}

	darkVision = (victim) => {
		if (this.mana >= 20 && this.dealDamage(5, victim)) {
			console.log(" => ⚡ Dark vision!");
			this.mana -= 20;
			this.shield = 2;
		}
	}
}
