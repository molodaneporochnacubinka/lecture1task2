const balances = [523, 6000, 5001, 5013];

const getBalance = (balance) => {
    let dim;
    let balanceEnd = balance % 100;
    if (balanceEnd > 20) {
        balanceEnd = balanceEnd % 10;
    }
    if (balanceEnd === 0 || balanceEnd > 4) {
        dim = 'баллов';
    }
    else if (balanceEnd > 1 && balanceEnd <= 4) {
        dim = 'балла';
    }
    else if (balanceEnd === 1) {
        dim = 'балл';
    }
    return `Ваш баланс: ${balance} ${dim}`;
};

for (let value of balances) {
    console.log(getBalance(value));
};

