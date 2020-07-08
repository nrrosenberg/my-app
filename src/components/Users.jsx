import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getUsers} from  '../services/users' 
//import { id } from 'postcss-selector-parser';


class Users extends Component {
    constructor(){
      super()
      this.state = {
        users: '',
        links: '',
      }
      this.fetchUsers = this.fetchUsers.bind(this);
    
    }

    async fetchUsers() {
        const {data, links} = await getUsers(localStorage.getItem('token'));
        await this.setState({ users: data, links: links});
      }
    
  render() {
      let users;
      console.log(this.state.users)
      if (this.state.users){
        users = this.state.users.map((user, i) => {
            const attributes = Object.values(user.attributes)
            return (
                <tbody key= {i}>
                <tr>
                    <td>{attributes[1]}</td>
                    <td>{attributes[2]}</td>
                    <td>{attributes[3]}</td>
                    <td>{attributes[4]}</td>
                    <td><img className='table-img' src={attributes[5]} alt="" /></td>
                </tr>
                </tbody>
            ); 
        });
      }

      return (
        <div className='container'>
          <h2>Users</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchUsers}> Todos los Users</button>
              </li>
          </ul>
        </div>
  
          <table>
            <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Username</th>
              <th>e-Mail</th>
              <th>Foto de perfil</th>

            </tr>
            </thead>
            {users}
          </table>
        </div>
      )
  }
}
  
  
export default Users;