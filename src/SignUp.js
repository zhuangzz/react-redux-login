import React, { Component } from 'react'
import axios from 'axios'

class SignUp extends Component {
  style = {
    'width': '300px',
    'margin': '20px auto'
  }

  signUp = (e) => {
    e.preventDefault()
    let username = this.usernameInput.value
    let password = this.passwordInput.value
    let data = {username, password}
    axios.post('http://192.168.0.138:5000/signup', data)
    .then(res => {
      console.log(res)
    })
  }
  componentDidMount(){
		axios.get("http://192.168.0.138:5000/data")
			.then(res=>console.log(res.data))
			.catch(err=>console.log("error"))
		}
		

  render() {
    return(
      <div style={this.style}>
        <h1>注册</h1>
        <form onSubmit={this.signUp}>
          <div>
            <input ref={value => this.usernameInput = value} type="text" placeholder="用户名" />
          </div>
          <div>
            <input ref={value => this.passwordInput = value} type="password" placeholder="password" />
          </div>
          <div>
            <input type="password" placeholder="再输入一次" />
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp