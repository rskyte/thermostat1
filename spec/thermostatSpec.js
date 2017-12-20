describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should default to 20 degrees", function() {
    expect(thermostat.temp).toEqual(20)
  })
})
