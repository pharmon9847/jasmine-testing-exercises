describe('Helper Utility test', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should sum total tip amount of all the payments with sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(20);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(60);
  });

  it('should sum the total bill amount for all payments with sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should sum the tip percent with sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
  });

  it('should sum tip percentage of single tip on calculateTipPercent()', function () {
    expect(calculateTipPercent(100, 25)).toEqual(25);
    expect(calculateTipPercent(200, 100)).toEqual(50);
  });

  it('should generate new td from value and append to tr with appendTd(tr, value', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should render delete td and append to tr on appendDeleteBtn(tr, type)', function () {
    let newTr = document.createElement('tr');

    appendDeleteBtn(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
