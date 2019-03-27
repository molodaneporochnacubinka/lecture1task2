const balances = [523, 6000, 5001, 5013];

const getBalance = (balance) => {
    let dim = 'балла';
    if (balance === 6000 || balance === 5013) {
        dim = 'баллов';
    }
    else if (balance === 5001) {
        dim = 'балл'
    }
    return `Ваш баланс: ${balance} ${dim}`;
};

for (let value of balances) {
    console.log(getBalance(value));
};

