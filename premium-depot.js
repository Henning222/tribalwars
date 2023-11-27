function fillMaxSellWood() {
    console.error("angekommen");
    // Holzmenge auslesen
    var woodElement = document.getElementById('wood');
    var availableWood = woodElement ? parseInt(woodElement.innerText.replace('.', ''), 10) : null;

    // Händlerkapazität auslesen
    var merchantCapacityElement = document.getElementById('market_merchant_max_transport');
    var merchantCapacity = merchantCapacityElement ? parseInt(merchantCapacityElement.innerText, 10) * 1000 : null;

    // Kapazität minus Vorrat auslesen
    var capacityElement = document.getElementById('premium_exchange_capacity_wood');
    var stockElement = document.getElementById('premium_exchange_stock_wood');
    var capacityMinusStock = capacityElement && stockElement ? parseInt(capacityElement.innerText, 10) - parseInt(stockElement.innerText, 10) : null;

    // Überprüfen, ob alle Werte vorhanden sind
    if (availableWood === null || merchantCapacity === null || capacityMinusStock === null) {
        console.error("Fehler beim Auslesen der Werte.");
        return;
    }

    // Der zu verkaufende Holzbetrag ist der kleinste der drei Werte
    var sellAmount = Math.min(availableWood, merchantCapacity, capacityMinusStock);

    // Eingabefeld für den Verkauf von Holz finden
    var sellWoodInput = document.querySelector('input[name="sell_wood"]');
    if (sellWoodInput) {
        // Setzen des Wertes des Eingabefelds auf den berechneten Betrag
        sellWoodInput.value = sellAmount;
    } else {
        console.error("Das Eingabefeld 'sell_wood' wurde nicht gefunden.");
    }
}

// Ausführen der Funktion
fillMaxSellWood();
