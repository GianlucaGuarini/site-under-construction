site-under-construction
=======================
Simple splash page template to use while a site is still under construction

### Demos

[![adobe](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/adobe.png)](http://gianlucaguarini.github.io/site-under-construction/demos/adobe)

[![bower](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/bower.png)](http://gianlucaguarini.github.io/site-under-construction/demos/bower)

[![grunt](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/grunt.png)](http://gianlucaguarini.github.io/site-under-construction/demos/grunt)

[![nodejs](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/nodejs.png)](http://gianlucaguarini.github.io/site-under-construction/demos/nodejs)

### Dependencies

- [nodejs](http://nodejs.org)
- [compass](http://compass-style.org)

### Usage

#### Install all the nodejs dependencies

```shell
$ npm install
```

#### Compile the css

Use the following command to compile the css anytime a .scss file gets changed

```shell
$ grunt watch
```

#### Generate the favicons

```shell
$ grunt favicons
```

#### Build

The build command will create a dist folder to let you upload just the necessary files on the server

```shell
$ grunt
```

