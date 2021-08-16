document.getElementById('depositButton').addEventListener('click', function () {
    const depopsitInput = document.getElementById('deposit-input');
    const newDepositAmmountText = depopsitInput.value;

    const newDepositAmmount = parseFloat(newDepositAmmountText);


    // update deposit total 
    const depositTotal = document.getElementById('total-deposit');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmmount = parseFloat(previousDepositText);
    const newDepositTotal = parseFloat(previousDepositAmmount) + newDepositAmmount;


    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear 
    depopsitInput.value = '';
});

// handle withdraw event handler
document.getElementById('withdrawButton').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmmountText = withdrawInput.value;
    const newWithdrawAmmount = parseFloat(withdrawAmmountText);
    console.log(newWithdrawAmmount);

    // set withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrwTotal = previousWithdrawTotal + newWithdrawAmmount;
    withdrawTotal.innerText = newWithdrwTotal;

    // clear withdraw Input
    withdrawInput.value = '';


    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    balanceTotal.innerText = newBalanceTotal;


});