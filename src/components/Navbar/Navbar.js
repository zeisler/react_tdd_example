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

  getInitialState: function() {
    return { headerClickCount: null };
  },

  onClickHeader: function(){
    var headerClickCount;
    if(this.state.headerClickCount === null){
      headerClickCount = 0;
    }else{
      headerClickCount = this.state.headerClickCount;
    }
    headerClickCount = headerClickCount + 1;
    this.setState({ headerClickCount: headerClickCount });
  },

  render: function() {
    return (
      <div className="navbar-top" role="navigation">
        <div className="container">
          <a onClick={this.onClickHeader} ref="headerLink" className="navbar-brand row" href="/">
            <img src={require('./logo-small.png')} width="38" height="38" alt="React"/>
            <span>{this.props.headerTitle}{this.state.headerClickCount}</span>
          </a>
        </div>
      </div>
    );
  }
});

export default Navbar;
