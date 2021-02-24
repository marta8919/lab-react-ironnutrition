import React, { Component } from 'react'
import FoodsJson from '../foods.json';
import FoodBox from './FoodBox.js'
import AddForm from './AddForm.js'
import Search from './Search.js'



export default class AllFoods extends Component {

    state = {
        foods : [],
        showForm: false, 
        filteredFoods: [],
    }

    componentDidMount(){

        this.setState({
            foods : FoodsJson,
            filteredFoods: FoodsJson,
        })
    }

    handleShowForm = () => {
        this.setState({ showForm : true})
    }

    handleAddForm= (event) =>{
        event.preventDefault()
        let name = event.target.name.value
        let calories = event.target.calories.value
        let image = event.target.image.value

        let newItem = {
            name : name,
            calories: calories,
            image : image
        }

        this.setState({
            showForm: false,
            foods: [newItem,...this.state.foods],
            filteredFoods: [newItem,...this.state.filteredFoods]

        })
    }

    handleChange = (event) => {
        let searchText = event.target.value.toLowerCase()

        let filteredList = this.state.foods.filter((singleFood)=>{
            return singleFood.name.toLowerCase().includes(searchText)
        })

        this.setState({
            filteredFoods : filteredList
        })
    }

    render() {

        const {filteredFoods, showForm} = this.state
        const {onItemAdd} = this.props

        return (
            <div>
                
                <Search myChange={this.handleChange}/>

                {
                    showForm ? <AddForm onAdd={this.handleAddForm} /> :  <button onClick={this.handleShowForm}>Show</button>
                }

                {
                    filteredFoods.map((singleFood, index)=>{
                        return <FoodBox 
                        name = {singleFood.name}
                        calories = {singleFood.calories}
                        image = {singleFood.image}
                        key= {index}
                        onItemAdd = {onItemAdd}
                        />
                    })

                }
            </div>
        )
    }
}
