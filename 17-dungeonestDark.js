function dungeonestDark(str) {
    let rooms = str.split(`|`);
    let health = 100;
    let coins = 0;
    let bestRoom = 1;

    for (i = 0; i < rooms.length; i++) {
        let curRoom = rooms[i];
        let tokens = curRoom.split(` `);

        let command = tokens[0];
        let value = Number(tokens[1])

        if (command === "potion") {

            let healthAdded = value;
            if (health + healthAdded > 100) {
                healthAdded = 100 - health;

            }
            health += healthAdded;
            console.log(`You healed for ${healthAdded} hp.`);
            console.log(`Current health: ${health} hp.`);

        }
        else if (command === "chest") {
            let coinsFound = value
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`);
        } else {
            let monsterName = command;
            let monsterAttack = value;
            health -= monsterAttack;

            if (health > 0) {
                console.log(`You slayed ${monsterName}.`);
            } else {
                console.log(`You died! Killed by ${monsterName}.`);
                console.log(`Best room: ${bestRoom}`);
                return;

            }
        }
        bestRoom++;

    }
    console.log(`You've made it!`)
    console.log(`Coins: ${coins}`)
    console.log(`Health: ${health}`)

}
dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")