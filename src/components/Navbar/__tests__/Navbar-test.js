/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* global jest, describe, it, expect */

'use strict';

jest.dontMock('../Navbar');
jest.dontMock('jquery');

describe('Navbar', function() {

  var React = require('react/addons');
  var jQuery = require('jquery');
  var TestUtils = React.addons.TestUtils;

  var Navbar = require('../Navbar');

  it('sets class name', function() {
    var Component = TestUtils.renderIntoDocument(React.createElement(Navbar));
    expect(TestUtils.isCompositeComponent(Component)).toEqual(true);
    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'navbar-top');
    expect(element).toBeDefined();
  });

});
