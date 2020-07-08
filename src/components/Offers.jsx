import React, {Component} from 'react';

import '../styles/navigation.css'
import '../styles/tables.css'
import {getOffers} from  '../services/offers' 
//import { id } from 'postcss-selector-parser';


class Offers extends Component {
    constructor(){
      super()
      this.state = {
        offers: '',
        links: '',
      }
      this.fetchOffers = this.fetchOffers.bind(this);
    
    }

    async fetchOffers() {
        const {data, links} = await getOffers(localStorage.getItem('token'));
        await this.setState({ offers: data, links: links});
      }
    
  render() {
      let offers;
      console.log(this.state.offers)
      if (this.state.offers){
        offers = this.state.offers.map((offer, i) => {
            const attributes = Object.values(offer.attributes)
            return (
                <tbody key= {i}>
                <tr>
                    <td>{attributes[1]}</td>
                    <td>{attributes[2]}</td>
                    <td> ${attributes[3]}</td>
                    <td>{attributes[4]}</td>
                </tr>
                </tbody>
            ); 
        });
      }

      return (
        <div className='container'>
          <h2>Ofertas de trabajo</h2>
          
          <div>
          <ul className="list-group list-group-horizontal-sm">
            
            <li className="">
              <button className='btn btn-outline-primary' onClick={this.fetchOffers}> Todos las Ofertas</button>
              </li>
          </ul>
        </div>
  
          <table>
            <thead>
            <tr>
              <th>Empresa Id</th>
              <th>Nombre</th>
              <th>Salario</th>
              <th>Vacantes</th>

            </tr>
            </thead>
            {offers}
          </table>
        </div>
      )
  }
}
  
  
export default Offers;