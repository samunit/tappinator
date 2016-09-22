const expect = require('chai').expect;
const configMiddleWare = require('../configMiddleWare');
const config = require('app/utils/config');
const sinon = require('sinon');

describe('configMiddleWare', () => {
  let configStub;
  beforeEach(() => {
    configStub = sinon.stub(config, 'getAll');
  });
  afterEach(() => {
    configStub.restore();
  });

  const invokeConfigGetAllCallback = (configObj = {}) => {
    return configStub.getCall(0).args[0](configObj);
  }

  it('should call next', () => {
    const next = sinon.spy();
    configMiddleWare({}, {}, next);

    invokeConfigGetAllCallback();

    expect(next.calledOnce).to.be.true;
  });
  it('should add config object to req', () => {
    const configObj = {
      SOME_CONFIG: 'SOME_CONFIG',
      I_LOVE_BEER: 'I_LOVE_BEER',
      HALO_ROCKS: 'HALO_ROCKS'
    };

    const req = {}, res = {}, next = sinon.spy();

    configMiddleWare(req, res, next);

    invokeConfigGetAllCallback(configObj);

    expect(req.config).to.deep.equal(configObj);
  });
});
