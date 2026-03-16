let hunger = 100;
let coins = 20;

function updateUI() {
    document.getElementById('stats').innerText = `Hunger: ${hunger} | Coins: ${coins}`;
}

function feedBunny() {
    if (hunger < 100) {
        hunger += 10;
        coins += 5;
        if (hunger > 100) hunger = 100;
        updateUI();
        alert("Nom nom! Snowball is happy.");
    } else {
        alert("Snowball is full!");
    }
}

function goSleep() {
    alert("Snowball is dreaming of carrots...");
    coins += 10;
    hunger -= 20;
    if (hunger < 0) hunger = 0;
    updateUI();
}
