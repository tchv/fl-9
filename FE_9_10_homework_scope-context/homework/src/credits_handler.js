// User Card (Task - 1)

function userCard(card) {

    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        key = card;

    return {
        getCardOptions() {
            return {
                key,
                balance,
                transactionLimit,
                historyLogs
            }
        },

        putCredits(credit) {
            const operation = 'Received credits';

            balance += credit;
            transactionHistory(credit, operation);
        },

        takeCredits(credit) {
            const operation = 'Withdrawal of credits';

            if(balance >= credit && transactionLimit >= credit) {
                balance -= credit;
                transactionHistory(credit, operation);
            } else {
                console.log('ERROR, please check your balance or transaction limit')
            } 
        },

        setTransactionLimit(credit) {
            const operation = 'Transaction limit change';

            transactionLimit = credit;
            transactionHistory(credit, operation);
        },

        transferCredits(credit, account) {
            const tax = 0.005;

            let totalCredit = credit + credit * tax;
            if (totalCredit <= balance && credit <= transactionLimit) {
                this.takeCredits(totalCredit);
                account.putCredits(credit);
            } else {
                console.log('ERROR, please check your balance or transaction limit');
            } 
        }
    }

    // Transaction History

    function transactionHistory(credit, operation) {
        historyLogs.push({
            operationType: operation,
            credits: credit,
            operationTime: new Date().toLocaleString('en-GB')
        })
    }
}

// User Account (Task - 2)

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.cardLimit = 3;
    }
    
    addCard() {
        if( this.cards.length < this.cardLimit ) {
            this.cards.push(userCard(this.cards.length + 1))
        } else {
            console.log('card lomit is over')
        }
    }

    getCardByKey(key) {
        return this.cards[key-1];
    }
}