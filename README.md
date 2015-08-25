generator-le-page
=========

**Make all the necessary files and file changes to add a new page to the angular application**

## Installation

  `npm install generator-le-page`

## Usage

```

  In order for the page generator to work, your angular project must have a 'client/index.html' and a 'client/src/app/app.js' file. You can optionally add hooks for the generator to include the new files and modules in those two files with the hooks "<!-- YOEMAN HOOK -->" and "/*--YEOMAN-HOOK--*/" respectively.

  To generate a new page, cd into your porject and run 'yo le-page' from the command line. You will be prompted for the name.
  
```

## Tests

* `npm test` to run unit tests

## Contributing

Please follow the project's [conventions](https://github.com/castle-dev/generator-le-page/blob/develop/CONTRIBUTING.md) or your changes will not be accepted

## Release History

* 0.1.0 Initial release
