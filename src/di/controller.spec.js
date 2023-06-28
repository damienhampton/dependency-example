const sinon = require("sinon");
const { assert } = require("chai");
const { makeController } = require("./controller");

describe("controller", () => {
  context("happy path", () => {
    it("should call model and display", async () => {
      const getStub = sinon.stub().resolves({});
      const displayStub = sinon.stub();
      const model = {
        get: getStub,
      };

      const controller = makeController(model, displayStub);
      await controller(1);

      assert.isTrue(getStub.called);
      assert.isTrue(displayStub.called);
    });
  });
});
