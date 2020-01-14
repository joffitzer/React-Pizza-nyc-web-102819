import React, { Component } from 'react';
import Pizza from '../components/Pizza'

class PizzaList extends Component {

  render() {

    let pizzaArray = this.props.allPizzas.map(pizzaObj => {
      return <Pizza pizza={pizzaObj} key={pizzaObj.id} handleEditClick={this.props.handleEditClick}/> 
    })

    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {pizzaArray}
        </tbody>
      </table>
    );
  }

}

export default PizzaList;
