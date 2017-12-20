$(document).ready(function() {
  $(function() {
    var thermostat = new Thermostat();
    $('#temp').text(thermostat.temp);
  });
});
