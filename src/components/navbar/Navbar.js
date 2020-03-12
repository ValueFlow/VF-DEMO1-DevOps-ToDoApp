import React, { Component } from "react";
import { configedFirebase } from '../../configs/Firebase';
import { Redirect } from 'react-router-dom'
import AuthHelper from '../../AuthHelper'

class Navbar extends Component {



  handleSignOut = () => {
    configedFirebase.auth().signOut();
    AuthHelper.setUser(null);
    this.props.history.push('/')
  }

  render() {

    const imageStyle = {
      widht: '50px',
      height: '50px'
    }

    const user = AuthHelper.getUser();

    return (
      <div className="navbar navbar-light bg-light">
        <div className="nav-user-info">
          <div>
            <strong>
              Hello, {user.displayName}
            </strong>
          </div>

          <div className="pull-left">
            <a onClick={() => this.handleSignOut()} className="" href="#">
              Sign out!
            </a>
          </div>
        </div>

        <span className="pull-right padding-10">
          <img alt="..." className="img-circle" style={imageStyle} src={user.photoURL ? user.photoURL : 'https://images-na.ssl-images-amazon.com/images/I/51kCuZFKLOL._SL1000_.jpg'} />
        </span>

      </div>
    );
  }
}

export default Navbar;
