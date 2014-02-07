site-under-construction
=======================
Simple simple splash page template to use while a site is still under construction

### Demos

![bower](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/bower.png)
![grunt](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/grunt.png)
![nodejs](https://raw2.github.com/GianlucaGuarini/site-under-construction/master/demos/images/nodejs.png)

### Dependencies

- [nodejs](http://nodejs.org)
- [compass](http://compass-style.org)

### Usage

#### Install all the npm dependencies

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

