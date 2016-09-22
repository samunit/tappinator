const expect = require('chai').expect;
const authMiddleware = require('../authMiddleware');
const sinon = require('sinon');

const SLACK_KEY = 'super-secret';

describe('authMiddleware', () => {
  it('should not call next if req.body does not contain valid SLACK_KEY', () => {
    const req = {
      config: {
        SLACK_KEY
      },
      body: {}
    };

    const res = {
      status: (code) => {
        return { send: sinon.spy() };
      }
    };

    const next = sinon.spy();

    authMiddleware(req, res, next);
    expect(next.called).to.be.false;
  });
  it('should call status with code 400, then send if req.body does not contain valid SLACK_KEY', () => {
    const req = {
      config: {
        SLACK_KEY
      },
      body: {}
    };

    const send = sinon.spy();
    const res = {
      status: (code) => {
        expect(code).to.equal(400)
        return { send };
      }
    };

    const next = sinon.spy();

    authMiddleware(req, res, next);
    expect(send.called).to.be.true;
  });
  it('should call next if req.body contains valid SLACK_KEY', () => {
    const req = {
      config: {
        SLACK_KEY
      },
      body: {
        token: SLACK_KEY
      }
    };

    const res = {
      status: (code) => {
        return { send: sinon.spy() };
      }
    };

    const next = sinon.spy();

    authMiddleware(req, res, next);
    expect(next.called).to.be.true;
  });
});
