import React, {Component} from "react";
import {Link} from "react-router-dom"
// import store from "./redux/store"
import {connect} from "react-redux"

class Header extends Component{
  render(){
    let authStr=(
      <div>
        <Link to="/signup">注册</Link>
        <Link to="/login">登陆</Link>
      </div>
    )
    let userInfo=(
      <div> 
        Nan | 退出
      </div>
    )
    // let isAuthenticated=false
    return(
        <header>
          {this.props.isAuthenticated ? authStr:userInfo}
        </header>
      )
  }
}
const mapStateToProps = (state) => ({
   isAuthenticated: state.account.isAuthenticated
  })
export default connect(mapStateToProps)(Header)