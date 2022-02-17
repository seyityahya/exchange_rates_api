class Currency {
    constructor(firstCurrency, secondCurreny) {
        this.firstCurrency = firstCurrency;
        this.secondCurreny = secondCurreny;
        this.url = "https://api.exchangerate.host/laters";
        this.amount = null;
    }
    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url)
                .then(response => response.json())
                .then(data => {

                    const firstValue = data.rates[this.firstCurrency];
                    const secondValue = data.rates[this.secondCurreny];
                    const amount2 = Number(this.amount);

                    let total = (secondValue / firstValue) * amount2;

                    resolve(total);

                })
                .catch(err => reject(err));


        })

    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurreny = newSecondCurrency;
    }


}
