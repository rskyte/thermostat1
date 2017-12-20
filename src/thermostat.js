DEFAULT_TEMPERATURE = 20

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE
}

Thermostat.prototype.turnUp = function(x) {
  this.temp += x;
}
