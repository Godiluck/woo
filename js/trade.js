window.addEventListener("load", function() {
    document.getElementById("trade-button").addEventListener("click", trade);
});

function trade() {
    const crypto = getCryptoTicker()

    switch (crypto) {
        case 'BTC':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(BTC)'
            break;
        case 'ETH':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(ETC)'
            break;
        case 'XLM':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(XLM)'
            break;
        case 'SOL':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(SOL)'
            break;
        case 'DOGE':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(DOGE)'
            break;
        case 'WAVES':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(WAVES)'
            break;
        case 'LTC':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(LTC)'
            break;
        case 'ATOM':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(ATOM)'
            break;
        case 'WOO':
            document.getElementById('bank-name-input').value = 'INSERT NETWORK NAME HERE(WOO)'
            break;
    }
    if (isAllInputsCorrect()) {
        const cryptoInput = document.getElementById('crypto-input').value
        document.getElementsByClassName("background-cover")[0].classList.remove("hidden");
        document.getElementsByClassName("loader-text")[0].innerText = "Looking for the best proposition";
        setTimeout(function() {
            document.getElementsByClassName("background-cover")[0].classList.add("hidden");
            document.getElementById("first-step").classList.add("hidden");
            document.getElementById("second-step").classList.remove("hidden");
        }, 2500);
        document.getElementById("crypto-title-final").innerText = document.getElementById("crypto-button").innerText;

        var fiat = getFiatFromBank(document.getElementById("fiat-button").innerText);
        var cryptoId = getCryptoId(document.getElementById("crypto-button").innerText);

        document.getElementById("fiat-title-final").innerText = getStableTicker() + " ";
        document.getElementById("min-amount-second").innerText = "(Min: " + getMinAmountWithoutFiat(fiat) + ")"
        document.getElementsByClassName("exchange-rate")[0].innerText = "1 " + getCryptoTicker() + " = " + correctInputValue(String(rates[cryptoId][fiat])) + " " + document.getElementById('fiat-title').innerText;
        document.getElementById('crypto-input-final').value = cryptoInput
        document.getElementById('fiat-input-final').value = correctInputValue(String(rates[cryptoId][fiat])) * cryptoInput
    }
}

function isAllInputsCorrect() {
    var passedCheck = true;

    var currentCrypto = document.getElementById("crypto-button").innerText;
    var currentFiat = document.getElementById("fiat-button").innerText;

    if (currentCrypto == "Crypto") {
        document.getElementById("crypto-dropdown-block").style["border-bottom-color"] = "#E74141";
        passedCheck = false;
    } else {
        document.getElementById("crypto-dropdown-block").style["border-bottom-color"] = "#707070";
    }

    if (currentFiat == "Crypto") {
        document.getElementById("fiat-dropdown-block").style["border-bottom-color"] = "#E74141";
        passedCheck = false;
    } else {
        document.getElementById("fiat-dropdown-block").style["border-bottom-color"] = "#707070";
    }

    return passedCheck;
}

function getStableTicker() {
    return document.getElementById("fiat-button").innerText.split('(')[1].replace(")", '');
}

function getBankName() {
    return document.getElementById("fiat-button").innerText.split(')')[1].trimStart();
}

function getCryptoTicker() {
    return document.getElementById("crypto-button").innerText.split('(')[1].replace(')', '');
}