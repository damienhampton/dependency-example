const { assert } = require("chai");
const sinon = require("sinon");
const { makeController } = require("./controller");

describe("controller", () => {
  context("happy path", () => {
    it("should load a record and display the output", async () => {
      const getStub = sinon.stub().resolves("carrot");
      const displayStub = sinon.stub();
      const model = {
        get: getStub,
      };

      const controller = makeController(model, displayStub);
      await controller(1);

      assert.isTrue(getStub.calledWith(1));
      assert.isTrue(displayStub.calledWith("carrot"));
    });
  });
});
