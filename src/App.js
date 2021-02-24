import React, { Component } from 'react'
import './App.css';
import 'bulma/css/bulma.css';
import AllFoods from './components/AllFoods.js'
import Total from './components/Total.js'

export default class App extends Component {

  state = {
    totalItems: []
  }

  handleAddItem = (food, quantity)=>{

    console.log(food)
    console.log(quantity)

    let myItem = {
      name: food.name,
      calories : food.calories,
      quantity: quantity
    }

    this.setState({
      totalItems : [...this.state.totalItems, myItem]
    })

  }

  render() {
    return (
      <div>

      <h1>IronNutrition</h1>

      <div className="columns">
        <div className="column">
          <AllFoods onItemAdd={this.handleAddItem}/>
        </div>
        <div className="column">
          <Total items={this.state.totalItems}/>
        </div>

      </div>

    </div>
    )
  }
}

