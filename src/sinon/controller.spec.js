const sinon = require("sinon");
const { assert } = require("chai");
const { controller } = require("./controller");
const display = require("./display");
const model = require("./model");

const sandbox = sinon.createSandbox();

describe("controller", () => {
  context("happy path", () => {
    it("should call model and display", async () => {
      const getStub = sandbox.stub(model, "get").resolves({});
      const displayStub = sandbox.stub(display, "doDisplay");

      await controller(1);

      assert.isTrue(getStub.called);
      assert.isTrue(displayStub.called);
    });
  });
  after(() => sandbox.restore());
});
