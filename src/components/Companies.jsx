import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getCompanies} from  '../services/companies' 
//import { id } from 'postcss-selector-parser';


class Companies extends Component {
    constructor(){
      super()
      this.state = {
        companies: '',
        links: '',
      }
      this.fetchCompanies = this.fetchCompanies.bind(this);
    
    }

    async fetchCompanies() {
        const {data, links} = await getCompanies(localStorage.getItem('token'));
        await this.setState({ companies: data, links: links});
      }
    
  render() {
      let companies;
      if (this.state.companies){
        companies = this.state.companies.map((company, i) => {
            const attributes = Object.values(company.attributes)
            return (
                <tbody key= {i}>
                <tr>
                    <td>{attributes[1]}</td>
                    <td>{attributes[2]}</td>
                    <td>{attributes[3]}</td>
                    <td><img className='table-img' src={attributes[4]} alt="" /></td>
                </tr>
                </tbody>
            ); 
        });
      }

      return (
        <div className='container'>
          <h2>Empresas</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchCompanies}> Todos las Empresas</button>
              </li>
          </ul>
        </div>
  
          <table>
            <thead>
            <tr>
              <th>Nombre</th>
              <th>e-Mail</th>
              <th>Descripcion</th>
              <th>Foto de perfil</th>

            </tr>
            </thead>
            {companies}
          </table>
        </div>
      )
  }
}
  
  
export default Companies;