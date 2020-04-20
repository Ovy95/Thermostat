
function Thermostat(){
  this.default_temperature = 20;
  this.temperature = this.default_temperature
  this.powerSaving = true;
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < 32 && this.powerSaving === false){
    this.temperature = this.temperature + 1
  }
  if (this.temperature < 25 && this.powerSaving === true) {
    this.temperature = this.temperature + 1
  };
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > 10) {
    this.temperature = this.temperature - 1
  };
};

Thermostat.prototype.resetThermostat = function() {
  if (this.temperature = this.default_temperature) {
  };
};

Thermostat.prototype.switchPowerSaving = function(){
  if (this.powerSaving === true) {
    this.powerSaving = false
  } else { 
    this.powerSaving = true
  }
};

Thermostat.prototype.switchPowerSavingON = function(){
    this.powerSaving = true
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) {
    return "low-usage"
  } else if(this.temperature >= 18 && this.temperature < 25) {
    return "medium-usage"
  } else {
    return "high-usage"
  } 

};

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());

}



