(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('a-b-c')) :
	typeof define === 'function' && define.amd ? define(['a-b-c'], factory) :
	(factory(global.a_b_c));
}(this, function (aBC) { 'use strict';

	aBC.foo();

}));