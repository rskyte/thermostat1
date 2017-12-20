DEFAULT_TEMPERATURE = 20
MINIMUM_TEMPERATURE = 10
POWER_SAVE_MAX_TEMP = 25;
STANDARD_MAX_TEMP = 32;

function Thermostat() {
  this.temp = DEFAULT_TEMPERATURE
  this.minTemp = MINIMUM_TEMPERATURE
  this.maxTemp = POWER_SAVE_MAX_TEMP;
  this.isPowerSaveOn = true;
}

Thermostat.prototype.turnUp = function(x) {
  if (this.temp + x > this.maxTemp) {
    throw new Error('Power save mode is on, maximum temp is 25!');
  };
  this.temp += x;
}
Thermostat.prototype.turnDown = function(x) {
  if (this.temp - x < this.minTemp) {
    throw new Error("Temperature too low!");
  }
  this.temp -= x;
}

Thermostat.prototype.adjustMaxTemp = function() {
  this.maxTemp = (this.maxTemp === POWER_SAVE_MAX_TEMP ?
    STANDARD_MAX_TEMP : POWER_SAVE_MAX_TEMP)
}

Thermostat.prototype.powerSaveOff = function() {
  this.isPowerSaveOn = false
  this.adjustMaxTemp()
}

Thermostat.prototype.powerSaveOn = function() {
  this.isPowerSaveOn = true
  this.adjustMaxTemp()
}
