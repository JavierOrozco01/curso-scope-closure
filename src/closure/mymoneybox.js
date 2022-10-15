// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins = saveCoins + coins;

//     console.log(` MoneyBox: $ ${saveCoins}`);

// }

function myMoneyBox() {
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins = saveCoins + coins;
        console.log(`MoneyBox: $ ${saveCoins}`);

    }
    return countCoins;
}

const MoneyBox = myMoneyBox();
MoneyBox(5);
MoneyBox(5);
MoneyBox(15);