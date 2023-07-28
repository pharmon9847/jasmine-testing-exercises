describe('Servers test', function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Michael Scott';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Michael Scott');
  });

  it('should not add server on submitServerInfo() with empty input', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update #serverTable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(curTdList.length).toEqual(3);
    expect(curTdList[0].innerText).toEqual('Michael Scott');
    expect(curTdList[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
