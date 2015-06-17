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


__Note__: depends on [angularjs](https://angularjs.org/) and [lodash](https://lodash.com/) (or [underscore.js](http://underscorejs.org/)).


__Why does this depend on Lodash / Underscore?__

 > I could've done the code so that I don't depend on Underscore nor Lodash, but I think both libraries make your life SO much easier. They have all of the "functional" stuff like map, reduce, filter, find, etc. With these libraries, you always work with immutable stuff, you get compatibility for browsers which don't implement ECMA5 nor some of these cool methods, and they're actually quicker. So, why not use it?
 > [mgonto](https://github.com/mgonto/restangular#why-does-this-depend-on-lodash--underscore)


# Usage

## Arrays
### first
Gets the first element of `array`.
```js
$scope.array = [1, 2, 3]
array | first // → 1

[] | first // → undefined
```

### last
Gets the last element of `array`.
```js
$scope.array = [1, 2, 3]
array | last // → 3

[] | last // → undefined
```


### join
Join elements of `array` with given `separator` (default `', '`)
```js
$scope.array = [1, 2, 3]
array | join // → 1, 2, 3

array | join:'.' // → 1.2.3
```


### initial
Gets all but the last element of array.
```js
$scope.array = [1, 2, 3]
array | initial // → [1, 2]
```


### size
Gets the size of `collection` by returning its length for array-like values or the number of own enumerable properties for objects.

```js
[1, 2, 3] | size // → 3

{ 'a': 1, 'b': 2 } | size // → 2

'pebbles' | size // → 7
```

see [loadsh doc](https://lodash.com/docs#size) for more information.

## Collections

### some
Checks if `predicate` returns truthy for __any__ element of collection.

```js
[null, 0, 'yes', false] | some // → true

$scope.users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
];

users | some:{'user': 'barney', 'active': false} // → false

users | some:'active':false; // → true

users | some:'active' // → true
```

see [lodash doc](https://lodash.com/docs#some) for more information


### every
Checks if `predicate` returns truthy for __all__ elements of `collection`. 
```js
[null, 0, 'yes', false] | any // → true

$scope.users = [
  { 'user': 'barney', 'active': false },
  { 'user': 'fred',   'active': false }
];

users | every:{ 'user': 'barney', 'active': false } // → false

users | every:'active' // → false
```
see [lodash doc](https://lodash.com/docs#every) for more information


### pluck
Gets the property value of `path` from all elements in `collection`.
```js
$scope.users = [
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 }
];

users | pluck:'user' // → ['barney', 'fred']
```
see [lodash doc](https://lodash.com/docs#pluck) for more information



## Strings

### cut
```js
$scope.str = 'abcdefghijklmnopqrstuvwxyz';

str | cut:5 // → abcde…

str | cut:5:'.' // → abcde.
```


### format
Formatting utility based on Python's `str.format()`. 

```js
$scope.user =  {firstName: 'Bobby', lastName: 'Fischer'};

'{0.firstName} {0.lastName}' | format:user // → Bobby Fischer

'{}, you have {} unread message{}' | format:'Steve':1 // → Steve, you have 1 unread message

'The name\'s {1}. {0} {1}.' | format:'James':'Bond'  // → The name's Bond. James Bond.
```


### remove-non-word
Remove non-word chars.

```js
$scope.str = 'lorem ~!@#$%^&*()_+`-={}[]|\\:";\'/?><., ipsum';

str | remove-non-word // → lorem - ipsum
```


### replace-accents
Replaces all accented chars with regular ones.

__Important__: Only covers Basic Latin and Latin-1 unicode chars.

```js
$scope.str = 'lõrêm ípsûm';

str | replace-accents // → lorem ipsum
```

### sluglify
Convert to lower case, remove accents, remove non-word chars and replace spaces with the delimeter. The default delimeter is a hyphen.

```js
$scope.str = 'loremIpsum dolor spéçïãl chârs';

str | sluglify // → lorem-ipsum-dolor-special-chars
```

### trim
Remove chars or white-spaces from beginning and end of string.

```js
$scope.str = '   lorem ipsum   ';

str | trim // → lorem ipsum
```


## Miscellaneoush

### gt, gte, lt, lte
```js
$soope.value = 0;
 
value | gt:0 // → false

value | gte:0 // → true

value | lt:2 // → true

value | lte:-1 // → false
```

### safe
Convert string to trusted html.

```js
$scope.html = '<b>Hello world&nbsp;!</b>';
html | safe // → <b>Hello world&nbsp;!</b>
```


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
