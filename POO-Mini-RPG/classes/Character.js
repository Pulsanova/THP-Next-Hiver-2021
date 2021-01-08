class Character {
	name;
	hp;
	dmg;
	mana;
	status = 'playing';
	shield = 0;
	isInvincible = false;

	constructor(name) {
		this.name = name;
	}

	initNewTurn = () => {};

	takeDamage = (damage) => {
		if (this.status !== 'playing') {
			console.log(`Hey pourquoi tu m'attaques ? Je ne joue même pas !`);
			return 0;
		}

		if (this.isInvincible) {
			console.log(`🛡️ Mouahahaha ! Je suis intouchable !`);
			return 0;
		}

		const effectiveDamage = damage - this.shield;

		this.hp -= effectiveDamage;

		if (this.hp <= 0) {
			this.hp = 0;
			this.status = 'loser';
			console.log(`💀 ${this.name} vient de carrément décéder !`);
		}

		return effectiveDamage;
	}

	dealDamage = (damage, victim) => {
		if (!victim) {
			console.error(`🤔 Euh... Il faut attaquer qui ?`);
			return false;
		}

		if (this.status !== 'playing') {
			console.log(`👻 Je ne peux pas attaquer, je ne joue pas ^^.`);
			return false;
		}

		if (victim.status !== 'playing') {
			console.log(`👻 Impossible d'attaquer, parce que ${victim.name} ne joue pas ^^.`);
			return false;
		}

		console.log(`💥 ${this.name} attaque ${victim.name} !!`);
		const effectiveDamage = victim.takeDamage(damage);

		if (effectiveDamage <= 0) {
			console.log(`🧈 Coup pour rien, ${victim.name} n'a pas été touché(e)... Même pas mal !`);
			return true;
		}

		console.log(`🤕 ${this.name} a fait perdre ${effectiveDamage} PV à ${victim.name}. Il lui reste ${victim.hp} PV.`);

		if (!victim.isAlive()) {
			this.mana += 20;
		}

		return true;
	}

	attacks = (victim) => {
		return this.dealDamage(this.dmg, victim);
	}

	specialAttacks = (victim) => {
		return this.dealDamage(this.dmg, victim);
	}

	isAlive = () => {
		return this.hp > 0;
	}
}
