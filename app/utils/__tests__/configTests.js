const expect = require("chai").expect;
const mockfs = require('mock-fs');
const config = require('../config.js');

describe('config', () => {
  afterEach(() => {
    mockfs.restore(); //restore file system
    process.env = {}; //reset process.env
  });
  it('should return undefined if file does not exist and key is not defined in process.env', done => {
    mockfs();

    const cb = value => {
      expect(value).to.be.undefined;
      done();
    }

    config('FOR_TEST', cb);
  });
  it('should return value from process.env if config file does not exist', done => {
    mockfs();
    const configValue = 'This is a test';
    process.env.FOR_TEST = configValue;

    const cb = value => {
      expect(value).to.equal(configValue);
      done();
    }

    config('FOR_TEST', cb);
  });
  it('should return undefined if config file exists but does not have key', done => {
    const fakeConfig = JSON.stringify({
      NOT_WHAT_YOU_ARE_LOOKING_FOR: 1337
    });
    mockfs({
      './appconfig/config.json': fakeConfig
    });

    const cb = value => {
      expect(value).to.be.undefined;
      done();
    }

    config('FOR_TEST', cb);
  });
  it('should return value from config file if it exists and has key', done => {
    const configValue = 'This is a test';
    const fakeConfig = JSON.stringify({
      NOT_WHAT_YOU_ARE_LOOKING_FOR: 1337,
      FOR_TEST: configValue
    });
    mockfs({
      './appconfig/config.json': fakeConfig
    });

    const cb = value => {
      expect(value).to.equal(configValue);
      done();
    }

    config('FOR_TEST', cb);
  });
});
