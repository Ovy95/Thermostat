$(document).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.temperature);
      $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#current-temperature').text(data.main.temp);
      })

  $('#temperature-up').click(function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());

    
   });
  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  });

  $('#temperature-reset').click(function() {
    thermostat.resetThermostat();
    thermostat.switchPowerSavingON();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSaving();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingON();
    thermostat.resetThermostat();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('.toggle_power').click(function() {
    thermostat.switchPowerSaving();
    thermostat.resetThermostat();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed', function(data) {
  console.log(data.main.temp);
  })

  $('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })
})








})
