let count = 0;
function addSomething(name, number) {
  count += number;
  console.log("Gesamtbetrag: " + count + "€");
  let element = document.getElementById("total");
  element.innerHTML = count + " €";
  let order = document.getElementById("order");
  order.innerHTML +=
    name + ": " + number + " €" + "<br>" + "<hr class='order-line'>";
}
function resetAll() {
  count = 0;
  let element = document.getElementById("total");
  element.innerHTML = count + " €";
  let order = document.getElementById("order");
  order.innerHTML = "";
}
function atHouse() {
  alert("Bestellung für vor Ort abgeschlossen: Gesamtbetrag " + count + "€");
}
const minDelivery = 20;
const driveDelivery = 2.5;
function deliveryOne() {
  if (count < minDelivery)
    alert(
      "Der Mindestbestellwert muss bei 20€ liegen. Aktueller Betrag " +
        count +
        "€",
    );
  else {
    alert(
      "Bestellung für Lieferung abgeschlossen! Gesamtbetrag " +
        (count + driveDelivery) +
        "€",
    );
  }
}
