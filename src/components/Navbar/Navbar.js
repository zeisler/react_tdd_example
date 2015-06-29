/*
 * React.js Starter Kit
 * Copyright (c) 2014 Konstantin Tarkus (@koistya), KriaSoft LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react'; // eslint-disable-line no-unused-vars

var Navbar = React.createClass({

  propTypes: {
    headerTitle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return { headerTitle: 'Default Header' };
  },

  render: function() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
          <a className="navbar-brand row" href="/">
            <img src={require('./logo-small.png')} width="38" height="38" alt="React"/>
            <span>{this.props.headerTitle}</span>
          </a>
        </div>
      </div>
    );
  }
});

export default Navbar;
