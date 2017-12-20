describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should default to 20 degrees", function() {
    expect(thermostat.temp).toEqual(20)
  })

  it("should increase temp by desired amount when called upon", function() {
    thermostat.turnUp(5);
    expect(thermostat.temp).toEqual(25);
  });

  it("should decrease temp by desired amount when called upon", function() {
    thermostat.turnDown(5);
    expect(thermostat.temp).toEqual(15);
  });
})
