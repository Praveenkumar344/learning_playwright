const { Before, After } = require('@cucumber/cucumber');
require('dotenv').config();
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.close();
});
