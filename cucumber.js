module.exports = {
  default: {
    require: [
      './steps/*.js',
      './support/*.js'
    ],
    tags:'not @skip',
    format: ['progress', 'json:reports/cucumber-report.json'],
    publishQuiet: true
  }
};
