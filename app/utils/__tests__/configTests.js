const expect = require("chai").expect;
const mockfs = require('mock-fs');
const config = require('../config');

describe('config', () => {
  afterEach(() => {
    mockfs.restore(); //restore file system
    process.env = {}; //reset process.env
  });
  describe('get', () => {
    it('should return undefined if file does not exist and key is not defined in process.env', done => {
      mockfs();

      const cb = value => {
        expect(value).to.be.undefined;
        done();
      };

      config.get('FOR_TEST', cb);
    });
    it('should return value from process.env if config file does not exist', done => {
      mockfs();
      const configValue = 'This is a test';
      process.env.FOR_TEST = configValue;

      const cb = value => {
        expect(value).to.equal(configValue);
        done();
      }

      config.get('FOR_TEST', cb);
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

      config.get('FOR_TEST', cb);
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

      config.get('FOR_TEST', cb);
    });
  });
  describe('getAll', () => {
    it('should return undefined if file does not exist and no known keys are defined in process.env', done => {
      mockfs();

      const cb = value => {
        expect(value).to.be.undefined;
        done();
      };

      config.getAll(cb);
    });
    it('should return values from process.env if config file does not exist', done => {
      //This test is also used as a sanity check.
      //Editing the object in configKeys.js will break this test.
      //Make sure to update the test accordingly.
      mockfs();
      process.env = {
        SLACK_KEY: 'SLACK_KEY',
        UNTAPPD_CLIENT_ID: 'UNTAPPD_CLIENT_ID',
        UNTAPPD_CLIENT_SECRET: 'UNTAPPD_CLIENT_SECRET'
      };

      const cb = value => {
        expect(value).to.deep.equal(process.env);
        done();
      }

      config.getAll(cb);
    });
    it('should return values from config file if it exists', done => {
      const configValue = 'This is a test';
      const fakeConfig = JSON.stringify({
        LEET: 1337,
        FOR_TEST: configValue
      });
      mockfs({
        './appconfig/config.json': fakeConfig
      });

      const cb = value => {
        expect(value).to.deep.equal(JSON.parse(fakeConfig));
        done();
      }

      config.getAll(cb);
    });
  })
});
