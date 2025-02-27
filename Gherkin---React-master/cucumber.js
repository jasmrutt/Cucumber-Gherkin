module.exports = {
  require: [
    'features/step_definitions/login_steps.js',  // Specify the location of your step definitions and support files
    'features/support/world.js'
  ],
  strict: true, // Fail if there are any undefined or pending steps
  format: ['progress', 'json:reports/cucumber-report.json'], // You can customize the output format as needed
};