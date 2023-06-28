const model = require("./model");
const display = require("./display");

async function controller(id) {
  const record = await model.get(id);
  await display.doDisplay(record);
}

module.exports = {
  controller,
};
