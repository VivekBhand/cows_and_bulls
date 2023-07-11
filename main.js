const secretNumber = Math.floor(Math.random() * 9000) + 1000;
console.log('Secret Number:', secretNumber);
let num = 0;
let prevBulls = 0;
let prevCows = 0;

function addRow() {
    const guess = document.getElementById('guessInput').value;
    if (guess.length !== 4 || isNaN(guess)) {
        alert('Please enter a valid 4-digit number.');
        return;
    }
    num++;
    let cows = 0;
    let bulls = 0;
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secretNumber.toString()[i]) {
            bulls++;
        } else if (secretNumber.toString().includes(guess[i])) {
            cows++;
        }
    }

    if (bulls === 4) {
        document.getElementsByClassName('message')[0].innerHTML = "Hurray ! You won !!";
        // row.classList.add("winning-row");
        alert('Congratulations! You won the game!');
    }

    let table = document.getElementById("result_table");

    let row = document.createElement("tr");
    if (bulls === 4) {
        row.classList.add("winning-row");
    }

    let c0 = document.createElement("td");
    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");

    c0.innerText = num;
    c1.innerText = guess;
    c2.innerText = cows;
    c3.innerText = bulls;

    if (bulls > prevBulls) {
        c3.style.color = "green";
    }
    else if (bulls < prevBulls) {
        c3.style.color = "red";
    }

    if (cows > prevCows) {
        c2.style.color = "green";
    }
    else if (cows < prevCows) {
        c2.style.color = "red";
    }

    prevBulls = bulls;
    prevCows = cows;

    row.appendChild(c0);
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    table.appendChild(row);
}
