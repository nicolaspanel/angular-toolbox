'use strict';

angular.module('angular-toolbox', [])
    .filter('any', [function() { return _.some; }])
    .filter('some', [function() { return _.some; }])
    .filter('cut', function() {
        return function (value, max, tail, wordwise) {
            if (!value) {
                return '';
            }
            max = parseInt(max || 20, 10);
            if (!max) {
                return value;
            }
            if (value.length <= max) {
                return value;
            }

            value = value.substr(0, max);
            if (wordwise === true) {
                var lastspace = value.lastIndexOf(' ');
                if (lastspace !== -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || '…');
        };
    })
    .filter('every', [function() { return _.every; }])
    .filter('all', [function() { return _.every; }])
    .filter('pluck', [function() { return _.pluck; }])
    .filter('first', [function() { return _.first; }])
    .filter('last', [function() { return _.last; }])
    .filter('initial', [function() { return _.initial; }])
    .filter('size', [function() { return _.size; }])
    .filter('gt', [function() { return function (a, b) { return a>b; }; }])
    .filter('gte', [function() { return function (a, b) { return a>=b; }; }])
    .filter('lt', [function() { return function (a, b) { return a<b; }; }])
    .filter('lte', [function() { return function (a, b) { return a<=b; }; }])
    .filter('join', [function() { return function (list, sep) { return list.join(sep || ', '); }; }])
    .factory('format', function() {
        /* jshint ignore:start */
        var __slice = [].slice;
        function lookup(object, key) {
            var match;
            if (!/^(\d+)([.]|$)/.test(key)) {
                key = '0.' + key;
            }
            while (match = /(.+?)[.](.+)/.exec(key)) {
                object = resolve(object, match[1]);
                key = match[2];
            }
            return resolve(object, key);
        }
        function resolve (object, key) {
            var value;
            value = object[key];
            if (typeof value === 'function') {
                return value.call(object);
            } else {
                return value;
            }
        }
        var implicitToExplicit = 'cannot switch from implicit to explicit numbering',
            explicitToImplicit = 'cannot switch from explicit to implicit numbering';

        return function() {
            var template = arguments[0] || '',
                args = 2 <= arguments.length ? __slice.call(arguments, 1) : [],
                idx = 0,
                explicit = false,
                implicit = false;
            return template.replace(/([{}])\1|[{](.*?)(?:!(.+?))?[}]/g, function(match, literal, key) {
                var value, _ref, _ref1;
                if (literal) {
                    return literal;
                }
                if (key.length) {
                    if (implicit) {
                        throw new Error(implicitToExplicit);
                    }
                    explicit = true;
                    value = (_ref = lookup(args, key)) != null ? _ref : '';
                } else {
                    if (explicit) {
                        throw new Error(explicitToImplicit);
                    }
                    implicit = true;
                    value = (_ref1 = args[idx++]) != null ? _ref1 : '';
                }
                return value;
            });
        };
        /* jshint ignore:end */
    })
    .filter('format', ['format',  function(format) { return format; }])
    .factory('trim', function() {
        /**
         * Remove white-spaces from beginning and end of string.
         * @example trim('   lorem ipsum   ') -> 'lorem ipsum'
         * @param {string} str
         * @return {string}
         */
        return function(str){ return (str || '').replace(/^\s+|\s+$/g, ''); };
    })
    .filter('trim', ['trim', function (trim) { return trim; }])
    .factory('removeNonWord', [function() {
        /**
         * Remove non-word chars.
         * @example removeNonWord('lorem! ipsum?') -> 'lorem ipsum'
         * @param {string} str
         * @return {string}
         */
        return function(str){
            return (str || '').replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, ''); //remove non-word chars
        };
    }])
    .filter('removeNonWord', ['removeNonWord', function (removeNonWord) { return removeNonWord; }])
    .factory('replaceAccents', [function() {
        // Replace accents service logic
        return function(str){
            str = str || '';
            // verifies if the String has accents and replace them
            if (str.search(/[\xC0-\xFF]/g) > -1) {
                str = str
                    .replace(/[\xC0-\xC5]/g, 'A')
                    .replace(/[\xC6]/g, 'AE')
                    .replace(/[\xC7]/g, 'C')
                    .replace(/[\xC8-\xCB]/g, 'E')
                    .replace(/[\xCC-\xCF]/g, 'I')
                    .replace(/[\xD0]/g, 'D')
                    .replace(/[\xD1]/g, 'N')
                    .replace(/[\xD2-\xD6\xD8]/g, 'O')
                    .replace(/[\xD9-\xDC]/g, 'U')
                    .replace(/[\xDD]/g, 'Y')
                    .replace(/[\xDE]/g, 'P')
                    .replace(/[\xE0-\xE5]/g, 'a')
                    .replace(/[\xE6]/g, 'ae')
                    .replace(/[\xE7]/g, 'c')
                    .replace(/[\xE8-\xEB]/g, 'e')
                    .replace(/[\xEC-\xEF]/g, 'i')
                    .replace(/[\xF1]/g, 'n')
                    .replace(/[\xF2-\xF6\xF8]/g, 'o')
                    .replace(/[\xF9-\xFC]/g, 'u')
                    .replace(/[\xFE]/g, 'p')
                    .replace(/[\xFD\xFF]/g, 'y');
            }
            return str;
        };
    }])
    .filter('replaceAccents', ['replaceAccents', function (replaceAccents) { return replaceAccents; }])
    .factory('unCamelCase', [function() {
        /**
         * Add space between camelCase text.
         * @example unCamelCase('loremIpsumDolor') -> 'lorem ipsum dolor'
         * @param {string} str
         * @return {string}
         */
        return function(str){
            return (str || '').replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, '$1 $2').toLowerCase(); //add space between camelCase text
        };
    }])
    .filter('unCamelCase', ['unCamelCase', function (unCamelCase) { return unCamelCase; }])
    .factory('slugify', ['unCamelCase', 'replaceAccents', 'removeNonWord', 'trim', function(unCamelCase, replaceAccents, removeNonWord, trim) {
        /**
         * Convert to lower case, remove accents, remove non-word chars and replace spaces with the specified delimeter.
         * Does not split camelCase text.
         * - ported from Miller Medeiros Eclipse Monkey Scripts
         * @example slugify('loremIpsum dolor spéçïãl chârs', '_') -> 'loremipsum_dolor_special_chars'
         * @param {string} str
         * @param {string} [delimeter="-"]
         * @return {string}
         */
        return function(str, delimeter){
            str = str || '';
            delimeter = delimeter || '-';
            str = unCamelCase(str);
            str = replaceAccents(str);
            str = removeNonWord(str);
            str = trim(str) //should come after removeNonWord
                .replace(/ +/g, delimeter) //replace spaces with delimeter
                .toLowerCase();
            return str;
        };
    }])
    .filter('slugify', ['slugify', function (slugify) { return slugify; }])
    .directive('slugify', ['slugify', function(slugify) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, elem, attr, ngModel) {

                //For DOM -> model validation
                ngModel.$parsers.unshift(function(value) {
                    return slugify(value);
                });

                //For model -> DOM validation
                ngModel.$formatters.unshift(function(value) {
                    return value;
                });
            }
        };
    }])
    .filter('safe', ['$sce', function($sce) {
        return function(input) {
            return $sce.trustAsHtml(input);
        };
    }]);
