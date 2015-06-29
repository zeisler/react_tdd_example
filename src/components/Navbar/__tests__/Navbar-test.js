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

  it('title is passed in as prop', function(){
    var headerTitle = 'TDD Example React App';
    var Component = TestUtils.renderIntoDocument(React.createElement(Navbar, {headerTitle: headerTitle}));
    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'navbar-brand');
    expect(element.getDOMNode().textContent).toEqual(headerTitle);
  });

  it('will have a default title', function(){
    var Component = TestUtils.renderIntoDocument(React.createElement(Navbar));
    var element = TestUtils.findRenderedDOMComponentWithClass(Component, 'navbar-brand');
    expect(element.getDOMNode().textContent).toEqual('Default Header');
  });

  it('clicking header title will increment it by one', function(){
    var Component = TestUtils.renderIntoDocument(React.createElement(Navbar));
    React.addons.TestUtils.Simulate.click(Component.refs.headerLink);
    expect(Component.refs.headerLink.getDOMNode().textContent).toEqual('Default Header1');
    React.addons.TestUtils.Simulate.click(Component.refs.headerLink);
    expect(Component.refs.headerLink.getDOMNode().textContent).toEqual('Default Header2');
  });

});
