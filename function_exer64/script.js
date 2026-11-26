function celsiusParaFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

let celsius = parseInt(prompt("Digite a temperatura em celsius: "));
alert(celsiusParaFahrenheit(celsius));