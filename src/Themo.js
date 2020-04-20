
function Thermostat(){
  this.default_temperature = 20;
  this.temperature = this.default_temperature
  this.Minimum_Temp = 10
  this.Maximum_Temp = 25
  this.PowerSaving_Mode_off_Max_Temp = 32
  this.powerSaving = true;
  this.Medium_Energy_Usage = 18
};

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < this.PowerSaving_Mode_off_Max_Temp && this.powerSaving === false){
    this.temperature = this.temperature + 1
  }
  if (this.temperature < this.Maximum_Temp && this.powerSaving === true) {
    this.temperature = this.temperature + 1
  };
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.temperature > this.Minimum_Temp) {
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
  if (this.temperature < this.Medium_Energy_Usage) {
    return "low-usage"
  } else if(this.temperature >= this.Medium_Energy_Usage && this.temperature < this.Maximum_Temp) {
    return "medium-usage"
  } else {
    return "high-usage"
  } 
};

function updateTemperature() {
  $('#temperature').text(thermostat.temperature);
  $('#temperature').attr('class', thermostat.energyUsage());
}