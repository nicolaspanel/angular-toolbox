# angular-toolbox

Minimalist set of services and filters for [angularjs](https://angularjs.org/) (~3kB once minified)

[![Build Status](https://travis-ci.org/nicolaspanel/angular-toolbox.png)](https://travis-ci.org/nicolaspanel/angular-toolbox) [![Coverage Status](https://coveralls.io/repos/nicolaspanel/angular-toolbox/badge.png?branch=master)](https://coveralls.io/r/nicolaspanel/angular-toolbox?branch=master)


# Install

```shell
$ bower install --save angular-toolbox
```

Include `angular-toolbox` and its dependency in your application:
```html
<script src="bower_components/lodash/lodash.js"></script> 
<script src="bower_components/angular/angular.js"></script> 
<script src="bower_components/angular-toolbox/angular-toolbox.js"></script>
```


__Note__: depends on Angular and [Lodash](https://lodash.com/) (or [Underscore](http://underscorejs.org/)).


__Why does this depend on Lodash / Underscore?__

 > I could've done the code so that I don't depend on Underscore nor Lodash, but I think both libraries make your life SO much easier. They have all of the "functional" stuff like map, reduce, filter, find, etc. With these libraries, you always work with immutable stuff, you get compatibility for browsers which don't implement ECMA5 nor some of these cool methods, and they're actually quicker. So, why not use it?
 > [mgonto](https://github.com/mgonto/restangular#why-does-this-depend-on-lodash--underscore)


# Usage
TODO

# License

The MIT License (MIT)

Copyright (c) 2015 Nicolas Panel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
