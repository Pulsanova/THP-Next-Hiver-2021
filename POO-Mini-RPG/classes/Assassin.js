class Assassin extends Character {
	name = 'Carl';
	hp = 6;
	dmg = 6;
	mana = 20;

	nextVictim = null;

	initNewTurn = () => {
		if (!this.nextVictim) {
			return;
		}

		this.dealDamage(7, this.nextVictim);
		this.isInvincible = false;

		if (this.nextVictim.isAlive()) {
			console.log(` => Shadow hit failed!`);
			this.takeDamage(7);
		}

		this.nextVictim = null;
	}

	specialAttacks = (victim) => {
		this.shadowHit(victim);
	}

	shadowHit = (victim) => {
		if (this.mana >= 20 && this.dealDamage(0, victim)) {
			console.log(" => ⚡ Shadow hit!");
			this.mana -= 20;
			this.isInvincible = true;
			this.nextVictim = victim;
		}
	}
}
