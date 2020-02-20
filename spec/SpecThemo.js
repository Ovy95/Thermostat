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


  
});