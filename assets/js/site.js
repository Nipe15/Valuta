function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let fromCurrency = document.getElementById("fromCurrency").value;
    let toCurrency = document.getElementById("toCurrency").value;

    let exchangeRate = {
        USD: { EUR: 0.83, GBP: 0.72 },
        EUR: { USD: 1.21, GBP: 0.87 },
        GBP: { USD: 1.39, EUR: 1.15 },
        DKK: { USD: 0.16, EUR: 0.13, GBP: 0.11 }
    };

    let convertedAmount = amount * exchangeRate[fromCurrency][toCurrency];
    let result = amount + fromCurrency + " = " + convertedAmount.toFixed(2) + toCurrency;
    document.getElementById("result").innerHTML = result;
}