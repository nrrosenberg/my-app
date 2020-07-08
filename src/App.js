import React, {Component} from 'react';

import './App.css';
import './styles/navigation.css'
import logo from './logo.svg';
import Posts from './components/Posts.jsx'
import Login from './components/Login.jsx'
import Freelancers from './components/Freelancers.jsx'
import Users from './components/Users.jsx'
import Companies from './components/Companies.jsx'
import Offers from './components/Offers.jsx'
import Services from './components/Services.jsx'


class App extends Component {
  constructor(){
    super()
    this.state = {
      token: '',
      status:''
    }
    this.logout = this.logout.bind(this);
    this.changeState = this.changeStatus.bind(this)
  }
  async componentDidMount(){
    this.setState({token: localStorage.getItem('token'), status: localStorage.getItem('status')})
  }

  async logout() {
    await localStorage.removeItem('token');
    window.location.reload(false)
  }

  async changeStatus(newStatus){
    await this.setState({status: newStatus})
    await localStorage.setItem('status', newStatus)
  }

  render() {
    let login;
    let offers
    let logoutBtn;
    let posts;
    let freelancers;
    let users;
    let companies
    let services
    if (!this.state.token) {
      login =  <Login/>
    }   
    else {
      logoutBtn = <button className='btn btn-outline-danger ml-auto' onClick={this.logout}> LogOut</button> 
      if (this.state.status === 'posts'){
        posts = <Posts/>
      }
      else if (this.state.status === 'freelancers'){
        freelancers = <Freelancers/>
      }
      else if (this.state.status === 'users'){
        users = <Users/>
      }
      else if (this.state.status === 'companies'){
        companies = <Companies/>
      }
      else if (this.state.status === 'offers'){
        offers = <Offers/>
      }
      else if (this.state.status === 'services'){
        services = <Services/>
      }
    }
    
    return (
      <div>
        
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <img src={logo} className="App-logo" alt="logo" />
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('posts')} >Posts</button>
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('freelancers')} >Freelancers</button>
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('users')} >Users</button>
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('companies')} >Empresas</button>
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('offers')} >Ofertas</button>
              <button className='btn btn-outline-light' onClick={()=> this.changeStatus('services')} >Servicios</button>
            
          
          {logoutBtn}
          </nav>
        {posts}
        {login}
        {freelancers}
        {users}
        {companies}
        {offers}
        {services}
        
      </div>
    );
  }
}

export default App;
