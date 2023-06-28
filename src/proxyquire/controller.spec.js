const proxyquire = require("proxyquire");
const sinon = require("sinon");
const { assert } = require("chai");

describe("controller", () => {
  context("happy path", () => {
    it("should call model and display", async () => {
      const getStub = sinon.stub().resolves({});
      const displayStub = sinon.stub();

      const { controller } = proxyquire("./controller", {
        "./model": {
          get: getStub,
        },
        "./display": displayStub,
      });

      await controller(1);

      assert.isTrue(getStub.called);
      assert.isTrue(displayStub.called);
    });
  });
});
