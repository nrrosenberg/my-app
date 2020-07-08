import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getFreelancers} from  '../services/freelancers' 
//import { id } from 'postcss-selector-parser';


class Freelancers extends Component {
    constructor(){
      super()
      this.state = {
        freelancers: '',
        links: '',
      }
      this.fetchFreelancers = this.fetchFreelancers.bind(this);
    
    }

    async fetchFreelancers() {
        const {data, links} = await getFreelancers(localStorage.getItem('token'));
        await this.setState({ freelancers: data, links: links});
      }
    
  render() {
      let freelancers;
      if (this.state.freelancers){
        freelancers = this.state.freelancers.map((freelancer, i) => {
            const attributes = Object.values(freelancer.attributes)
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
          <h2>Freelancers</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchFreelancers}> Todos los Freelancers</button>
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
            {freelancers}
          </table>
        </div>
      )
  }
}
  
  
export default Freelancers;