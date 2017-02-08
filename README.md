### Rock paper Scissors App
A simple game using Angular 1.5. Unit tests written with Jasmine and run with Karma.

### Install Dependencies

Run:

```
npm install
```

### Run the Application

Run:

```
gulp
```

This should build the site files to the dist folder and serve from there on your local machine.

### Running Unit Tests

Unit tests are written in [Jasmine][jasmine], which we run with the [Karma][karma] test runner.
We provide a Karma configuration file to run them.

* The configuration is found at `karma.conf.js`.
* The unit tests are found next to the code they are testing and have an `.test.js` suffix (e.g.
  `view1_test.js`).

The easiest way to run the unit tests is to use the supplied npm script:

```
npm test
```

This script will start the Karma test runner to execute the unit tests. Moreover, Karma will start
watching the source and test files for changes and then re-run the tests whenever any of them
changes.
This is the recommended strategy; if your unit tests are being run every time you save a file then
you receive instant feedback on any changes that break the expected code functionality.

You can also ask Karma to do a single run of the tests and then exit. This is useful if you want to
check that a particular version of the code is operating as expected. The project contains a
predefined script to do this:

```
npm run test-single-run
```
