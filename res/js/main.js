const moneyCounter = document.getElementById("moneyCounter");
const worldlevel = document.getElementById("worldlevel");
//UPGRADY AZ POSLEDNI

const DMG = document.getElementById("DMG");
const DPS = document.getElementById("DPS");
const BIOME = document.getElementById("BIOME");
const health = document.getElementById("health");
const killed = document.getElementById("killed");
const goblin1 = document.getElementById("goblin1");

let numberOfMoney = 0;
let goblinOnClick = 1;
let healthbar = 10;
let maxHp = 10;
let money = 10;
let kills = 0;

goblin1.onclick = () => {
  healthbar -= goblinOnClick;
  health.innerHTML = `${healthbar}/${maxHp}`;
  if (healthbar <= 0) {
    if (kills < 9) {goblin1.style.pointerEvents = "none";
    setTimeout(() => {
      healthbar += maxHp;
      goblin1.style.pointerEvents = "auto";
    }, 200);
    kills++;
    killed.innerHTML = `Killed: ${kills}/10`;
    numberOfMoney += money;
    moneyCounter.innerHTML = `${numberOfMoney}`;
    health.innerHTML = `${healthbar}/${maxHp}`;
}
    
    else{goblin1.style.pointerEvents = "none";
    maxHp *= 5
    kills -= 10
    setTimeout(() => {
      healthbar += maxHp;
      goblin1.style.pointerEvents = "auto";
      health.innerHTML = `${healthbar}/${maxHp}`;
    }, 200);
    kills++;
    killed.innerHTML = `Killed: ${kills}/10`;
    numberOfMoney += money;
    moneyCounter.innerHTML = `${numberOfMoney}`;
    health.innerHTML = `${healthbar}/${maxHp}`;
    }
  }
};
