describe('test calculateMonthlyPayment()', function () {
  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 100000,
      years: 30,
      rate: 7.6,
    };
    expect(calculateMonthlyPayment(values)).toEqual('706.07');
  });
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 350000,
      years: 30,
      rate: 7.6,
    };
    expect(calculateMonthlyPayment(values)).toEqual('2471.26');
  });
  it('should return a result with 2 decimal places', function () {
    // ..
    const values = {
      amount: 100000,
      years: 30,
      rate: 7.6,
    };
    expect(calculateMonthlyPayment(values)).toEqual('706.07');
  });
});

/// etc
