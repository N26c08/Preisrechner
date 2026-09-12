let count = 0;
const minDelivery = 20;
const deliveryFee = 2.5;
let order = document.getElementById("order");
function addSomething(name, number) {
  count += number;
  console.log("Gesamtbetrag: " + count + "€");
  updateTotal();
  order.innerHTML +=
    name + ": " + number + " €" + "<br>" + "<hr class='order-line'>";
}
function updateTotal() {
  let element = document.getElementById("total");
  element.innerHTML = count + " €";
}
function resetAll() {
  count = 0;
  updateTotal();
  order.innerHTML = "";
}
function atHouse() {
  alert("Bestellung für vor Ort abgeschlossen: Gesamtbetrag " + count + "€");
  resetAll();
}
function deliveryOne() {
  if (count < minDelivery) {
    alert(
      "Der Mindestbestellwert muss bei 20€ liegen. Aktueller Betrag " +
        count +
        "€",
    );
  } else {
    alert(
      "Bestellung für Lieferung abgeschlossen! Gesamtbetrag " +
        (count + deliveryFee) +
        "€",
    );
    resetAll();
  }
}
