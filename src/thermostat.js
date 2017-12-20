DEFAULT_TEMPERATURE = 20
MINIMUM_TEMPERATURE = 10

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE
  this.minTemp = MINIMUM_TEMPERATURE
}

Thermostat.prototype.turnUp = function(x) {
  this.temp += x;
}
Thermostat.prototype.turnDown = function(x) {
  if (this.temp - x < this.minTemp) {
    throw new Error("Temperature too low!");
  }
  this.temp -= x;
}
