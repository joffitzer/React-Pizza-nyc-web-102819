import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

class App extends Component {

  state = {
    allPizzas: [],
    topping: '',
    size: '',
    veg: '',
    id: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pizzas')
      .then(res=>res.json())
      .then(pizzas => this.setState({
        allPizzas: pizzas
      }))
  }

  handleEditClick = (pizza) => {
    this.setState({
      topping: pizza.topping,
      size: pizza.size,
      veg: pizza.vegetarian,
      id: pizza.id
    })
  }

  handleToppingChange = (e) => {
    this.setState({
      topping: e.target.value
    })
  }

  handleSizeChange = (e) => {
    this.setState({
      size: e.target.value
    })
  }

  handleVegChange = (e) => {
    this.setState({
      veg: !this.state.veg
    })
  }

  handleSubmit = (editedPizza) => {
    console.log(editedPizza)
      fetch (`http://localhost:3000/pizzas/${editedPizza.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json', 
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          topping: editedPizza.topping, 
          size: editedPizza.size,
          vegetarian: editedPizza.veg
        })
      }
    )
  }

  componentDidUpdate() {
    fetch('http://localhost:3000/pizzas')
      .then(res=>res.json())
      .then(pizzas => this.setState({
        allPizzas: pizzas
      }))
  }

  render() {

    return (
      <Fragment>
        <Header/>

        <PizzaForm 
        topping={this.state.topping}
        size={this.state.size}
        veg={this.state.veg}
        id={this.state.id}
        handleToppingChange={this.handleToppingChange}
        handleSizeChange={this.handleSizeChange}
        handleVegChange={this.handleVegChange}
        handleSubmit={this.handleSubmit}
        />

        <PizzaList 
        allPizzas={this.state.allPizzas}
        handleEditClick={this.handleEditClick}/>

      </Fragment>
    );
  }
}

export default App;
