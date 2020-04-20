'use strict';

describe ("Thermostat", function(){
  var thermostat;
  
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("Should should return 20", function(){
    expect(thermostat.temperature).toEqual(20);
  });

  it("Should be able to turn up temperature",function(){
    thermostat.increaseTemperature()
    expect(thermostat.temperature).toEqual(21);
  });

  it("Should be able to decrease the temperature",function(){
    thermostat.decreaseTemperature()
    expect(thermostat.temperature).toEqual(19);
  });
  
  it("The minimum temperature is 10 degrees",function(){
    for (t = 0; t < 15; t++) {
      thermostat.decreaseTemperature()
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it("Power saving mode is on by default",function(){
    expect(thermostat.powerSaving).toBe(true)
  })

  it("the maximum temperature is 25 degrees if power saving mode is on",function(){
    for (t = 0; t < 30; t++) {
      thermostat.increaseTemperature()
    };
    expect(thermostat.temperature).toEqual(25);
  });
  
  it("can switch powersaving mode on or off", function(){
    expect(thermostat.powerSaving).toBe(true)
    thermostat.switchPowerSaving()
    expect(thermostat.powerSaving).toBe(false)
    thermostat.switchPowerSaving()
    expect(thermostat.powerSaving).toBe(true)
  });


  it("Power saving mode is off, max temp is 32",function(){
    thermostat.powerSaving = false;
  
    for (t = 0; t < 50; t++) {
      thermostat.increaseTemperature()
    };
    expect(thermostat.temperature).toEqual(32);

  });

  it("Reset the temperature to 20 with a reset function" , function(){
    thermostat.decreaseTemperature() 
    thermostat.decreaseTemperature()//18
    expect(thermostat.resetThermostat()) 
    expect(thermostat.temperature).toEqual(20);
  });


  it("You can check the current temperature",function(){
    thermostat.getCurrentTemperature()
  });

  describe('displaying usage levels', function() {
    describe('when the temperature is below 18 degrees', function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.decreaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe('when the temperature is between 18 and 25 degrees', function() {
      it('it is considered medium-usage', function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe('when the temperature is anything else', function() {
      it('it is considered high-usage', function() {
        thermostat.powerSaving = false;
        for (var i = 0; i < 6; i++) {
          thermostat.increaseTemperature();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });

  });


  
});