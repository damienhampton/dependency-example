const makeController = (model, display) => async (id) => {
  const record = await model.get(id);
  await display(record);
};

module.exports = {
  makeController,
};
