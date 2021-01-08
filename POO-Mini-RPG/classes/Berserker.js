class Berserker extends Character {
	name = 'Draven';
	hp = 8;
	dmg = 4;
	mana = 0;

	specialAttacks = (victim) => {
		this.rageAttack(victim);
	}

	rageAttack = (victim) => {
		if (this.dealDamage(0, victim)) {
			console.log(" => ⚡ Rage attack!");
			this.dmg += 1;
			this.takeDamage(1);
		}
	}
}
