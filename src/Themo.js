
function Thermostat(){
  
  this.temperature = 20;
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

Thermostat.prototype.switchPowerSaving = function() {
  if (this.powerSaving === true) {
    this.powerSaving = false
  } else { 
    this.powerSaving = true
  }

};



