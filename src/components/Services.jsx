import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getServices} from  '../services/services' 
//import { id } from 'postcss-selector-parser';


class Services extends Component {
    constructor(){
      super()
      this.state = {
        services: '',
        links: '',
      }
      this.fetchServices = this.fetchServices.bind(this);
    
    }

    async fetchServices() {
        let data = await getServices(localStorage.getItem('token'));
        await this.setState({ services: data, links: ''});
        console.log(data[0])

        
      }
    
  render() {
      let services;
      
      if (this.state.services){
        services = this.state.services.map((service, i) => {
            
            return (
                <tbody key= {i}>
                <tr>
                    <td>{service.freelancerUsername}</td>
                    <td>{service.name}</td>
                    <td> {service.description}</td>
                    <td>${service.price}</td>
                    <td><img className='table-img' src={service.picture} alt="" /></td>
             
                </tr>
                </tbody>
            ); 
        });
      }

      return (
        <div className='container'>
          <h2>Servicios ofrecidos por freelancers</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchServices}> Todos los Servicios</button>
              </li>
          </ul>
        </div>
  
          <table>
            <thead>
            <tr>
              <th>Freelancer</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>precio</th>
              <th>Foto</th>
              

            </tr>
            </thead>
            {services}
          </table>
        </div>
      )
  }
}
  
  
export default Services;