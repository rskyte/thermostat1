describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  })

  it("should default to 20 degrees", function() {
    expect(thermostat.temp).toEqual(DEFAULT_TEMPERATURE)
  })

  it("should increase temp by desired amount when called upon", function() {
    thermostat.turnUp(5);
    expect(thermostat.temp).toEqual(25);
  });

  it("should decrease temp by desired amount when called upon", function() {
    thermostat.turnDown(5);
    expect(thermostat.temp).toEqual(15);
  });

  it("should not go below the minimum temperature", function() {
    thermostat.turnDown(10)
    var tempTooLow = function() {
      thermostat.turnDown(1);
    }
    expect(tempTooLow).toThrowError("Temperature too low!")
  })

  it('Should not be able to exceed the maximum temperature', function() {
    thermostat.turnUp(5);
    var tempTooHigh = function() {
      thermostat.turnUp(1);
    };
    expect(tempTooHigh).toThrowError('Power save mode is on, maximum temp is 25!');
  })

  it("max temp is adjusted by turning power save mode off", function() {
    thermostat.powerSaveOff()
    expect(thermostat.maxTemp).toEqual(STANDARD_MAX_TEMP)
  })

  it("max temp is adjusted by turning power save mode on", function() {
    thermostat.powerSaveOff()
    thermostat.powerSaveOn()
    expect(thermostat.maxTemp).toEqual(POWER_SAVE_MAX_TEMP)
  })

  it('should reset temp after calling reset temp', function() {
    thermostat.turnUp(4);
    thermostat.reset();
    expect(thermostat.temp).toEqual(DEFAULT_TEMPERATURE);
  })

  describe('should return energy usage', function() {
    it('should return low-usage when temp is below 18', function() {
      thermostat.turnDown(3);
      expect(thermostat.energyUsage()).toEqual('Low-usage');
    });
    it('should return medium-usage when temp is below 25', function() {
      thermostat.turnUp(4);
      expect(thermostat.energyUsage()).toEqual('Medium-usage');
    });
    it('should return high-usage when temp is above or equal to 25', function() {
      thermostat.turnUp(5);
      expect(thermostat.energyUsage()).toEqual('High-usage');
    })
  })
})
