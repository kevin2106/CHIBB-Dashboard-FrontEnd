import React from "react";
import { IndexLink, Link } from "react-router";
import { login, logout, isLoggedIn } from '../../services/AuthService';

class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const sensorClass = location.pathname.match(/^\/sensors/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={featuredClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Home</IndexLink>
              </li>
              <li class={sensorClass}>
                <Link to="sensors" onClick={this.toggleCollapse.bind(this)}>Sensors</Link>
              </li>
              <li class={settingsClass}>
                <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
              </li>
            </ul>
            <ul class ="nav navbar-nav navbar-right">
              <li>
              {
                (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
              }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
export default Nav;
